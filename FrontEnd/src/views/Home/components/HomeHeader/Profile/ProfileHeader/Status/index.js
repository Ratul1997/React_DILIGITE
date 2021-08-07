import React from 'react'
import StatusView from './StatusView'

export default function Status(props) {
    const {authorisedUserDetails} = props

    console.log("INSIDE STATUS");
    console.log(props);

    return (
        <StatusView 
            authorisedUserDetails = {authorisedUserDetails}
        />
    )
}
