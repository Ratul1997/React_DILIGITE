import React from 'react'
import ProfileHeader from './ProfileHeader';

export default function (props) {
    const {authorisedUserDetails, setAuthorisedUserDetails} = props

    const onClickProfileIconHandler = () => {
        
    }


    return (
        <ProfileHeader 
            authorisedUserDetails = {authorisedUserDetails}
            setAuthorisedUserDetails = {setAuthorisedUserDetails}
        />
    )
}
