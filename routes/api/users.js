const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator'); // /check togs bort fr¨n express validator

const User = require('../../models/User');

//Kollar att namn, lösen och email är ifyllt
router.post('/',
[
    check('name', 'Namn är obligatoriskt')
    .not().
    isEmpty(),
    check('email', 'Vänligen skriv en giltlig email').isEmail(),
    check('password','Lösenordet måste vara minst sex tecken').isLength({ min: 6})
],
 async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        //Kollar om anvädaren redan finns
        if(user) {
            return res.status(400).json({ errors: [{ msg: 'Användare finns redan'}]});
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        //Skapar nya användare
        user = new User({
            name,
            email,
            avatar,
            password
        });

        //Kryptera lösenord
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        //Spara användare till databasen
        await user.save();

       const payload = {
           user: {
               id: user.id
           }
       }

       jwt.sign(payload, 
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
            if (err) throw err;
            res.json({ token })
        }
       );

        } catch(err) {
            console.log(err.message);
            res.status(500).send('Server error');

        }

    }
);




module.exports = router;