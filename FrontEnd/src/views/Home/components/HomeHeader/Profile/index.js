import React from 'react'
import { useLocation } from 'react-router-dom'
import ProfileView from './ProfileView'

export default function () {

    let location = useLocation();

    console.log(location);

    return <ProfileView />
}
