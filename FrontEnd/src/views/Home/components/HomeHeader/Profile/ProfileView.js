import React, { useState } from 'react'
import { Navbar,Nav , Container } from 'react-bootstrap'
import { BrowserRouter as Router , Link, Route, Switch, useRouteMatch, useLocation } from 'react-router-dom'
import Profile from '.'
import { CgFeed } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Button  } from '@material-ui/core';
import Settings from './ProfileHeader/Settings';
import Status from './ProfileHeader/Status';
import { makeStyles } from '@material-ui/core/styles';

export default function ProfileView() {


    let location = useLocation()

    const {path,url} = useRouteMatch();
    console.log(path,url);

    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(location.state.data);

    const useStyles = makeStyles(theme => ({
        root:{
            display : 'flex',
            flexDirection : 'row',
            justifyContent: 'space-between',
        },
        icons : {
            display : 'flex',
            alignItems : 'center',
        },
        logger_name:{
            fontSize : '25px',
            fontFamily : 'arial',
            color : '#3d3c38'
        }
        
    }));

    const styles = useStyles();

    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                            <Navbar.Collapse id="basic-navbar-nav" className = {styles.root}>
                            <p className = {styles.logger_name}>
                                <b>{authorisedUserDetails.userHandle}</b>
                            </p>
                            <Nav className= {styles.icons}>
                                <Nav.Link as = {Link} to={`${url}`}> 
                                    <Button>
                                        <CgFeed size = "40" />
                                    </Button>
                                </Nav.Link>
                                <Nav.Link as = {Link} to={`${url}/asd`}>
                                    <Button>
                                        <FiSettings size = "40" />
                                    </Button>
                                </Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>

                    <Route exact path={`${path}`}>
                        <Status 
                            authorisedUserDetails = {authorisedUserDetails}
                        />
                    </Route>
                    <Route path={`${path}/asd`}>
                        <Settings 
                            authorisedUserDetails = {authorisedUserDetails}
                            setAuthorisedUserDetails = {setAuthorisedUserDetails}
                        />
                    </Route>
                </Switch>
            </div> 
            
        </Router>
    )
            
}