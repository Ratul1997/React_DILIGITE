import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CgProfile } from "react-icons/cg";
import { Button  } from '@material-ui/core';


export default function HomeHeaderElements(props) {
    const {authorisedUserDetails , onClickProfileIconHandler} = props;

    const useStyles = makeStyles(theme => ({
        root:{
            display : 'flex',
            flexDirection : 'row',

        },
        header_title:{
            minWidth : '95%',
        },
        settings : {
            display : 'flex',
            width : '100%',
        },
        settings_icon:{
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
        <div className = {styles.root}>
            {/* logged in as portion */}
            <div className = {styles.header_title}>
                <p className = {styles.logger_name}>
                    <b>{authorisedUserDetails.userHandle}</b>
                </p>
            </div>

            <div className = {styles.settings}>
                <div className = {styles.settings_icon}>
                    <Button onClick = {onClickProfileIconHandler} >
                        <CgProfile size = "40" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
