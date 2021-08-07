import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import ProfileView from './ProfileView'

export default function () {

    let location = useLocation();

    console.log(location);

    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(location.state.data);

    return (
        <ProfileView 
            authorisedUserDetails = {authorisedUserDetails}
            setAuthorisedUserDetails = {setAuthorisedUserDetails}
        />
     )
}
