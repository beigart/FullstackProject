const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator'); 

const User = require('../../models/User');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.post('/',
[
    check('email', 'Vänligen skriv en giltlig email').isEmail(),
    check('password','Lösenordet måste finnas').exists()
],
 async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        //Kollar om anvädaren redan finns
        if(!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid'}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'Invalid'}]});
        }



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

