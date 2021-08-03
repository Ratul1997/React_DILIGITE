import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { FiSettings } from "react-icons/cg";
import { IconName } from "react-icons/fi";
import { Button  } from '@material-ui/core';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Status from './ProfileHeader/Status';
import Settings from './ProfileHeader/Settings';

export default function ProfileView() {

    return (
        <Router>
            <div>
                <ProfileHeader />
                <Switch>
                    <Route exact path = '/Status' component = {Status} />
                    <Route path = '/Settings' component = {Settings} />
                </Switch>
            </div>
        </Router>
    )
}
