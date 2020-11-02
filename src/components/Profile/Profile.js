import React, {useContext} from 'react'
import { UserContext } from '../../utils/context/UserContext'

export const Profile = () => {

    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    return (
        <div>
            <span>{ " | " +loggedInUser}</span>
            
        </div>
    )
}
