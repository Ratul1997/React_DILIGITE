import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import LogIn from './views/LogIn'
import Settings from './views/Home/components/HomeHeader/Profile/ProfileHeader/Settings'
import Status from './views/Home/components/HomeHeader/Profile/ProfileHeader/Status'
import SignUp from './views/SignUp'
import NewPage from './NewPage'
import Profile from './views/Home/components/HomeHeader/Profile'

export default function Routes() {
    return (
       <Switch>
           <Route exact path = '/' component = {LogIn} />
           <Route path = '/signup' component = {SignUp} />
           <Route path = '/home' component = {Home} />
           <Route path = '/Profile' component = {Profile} />
       </Switch>
    )
}
