import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button , TextField } from '@material-ui/core';

export default function Settings(props) {
    const {
        isSame ,
        isChanged,
        newUserDetails , 
        tempPasswordStorage,
        onChangeHandleNameHandler,
        onChangeNameHandler,
        onChangeEmailHandler,
        onChangePhoneNumberHandler,
        onChangeCurrentPasswordHandler,
        onChangeFirstPasswordHandler,
        onChangeConfirmPasswordHandler,
        submitUsersUpdateInfo} = props;

    const useStyles = makeStyles(() => ({
        root:{
            display : 'flex',
            backgroundColor : '#fdffe0',
            flexDirection : 'column',
            borderRadius : '6px',
            border: 1,
            borderStyle: 'solid',
            margin : 'auto',
            width: '35%',
            padding: '30px',
        },
        box:{
            alignSelf: 'center',
            width : '100%',
            marginBottom: '20px',
        },
        button_div :{
            display : 'flex',
            marginTop : '1ch',
            marginLeft : '86%'
        },
        button_desgin :{
            backgroundColor : '#d6d306'
        },
        tectfield_design:{
            width : '100%',
        }
    }));

    const styles = useStyles();
    const [isClicked, setIsClicked] = useState(false);

    const buttonClicked = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className = {styles.root}>
            <form>
                {/* userHandler change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Handler"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange = {onChangeHandleNameHandler}
                    />
                </div>

                {/* name change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Name"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeNameHandler}
                    />
                </div>

                {/* email address change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Email address"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeEmailHandler}
                    />
                </div>

                {/* phone number change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Phone"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangePhoneNumberHandler}
                    />
                </div>

                {/* confirming current password */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Current password"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeCurrentPasswordHandler}
                    />
                </div>

                {/* new password input */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change password"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeFirstPasswordHandler}
                    />
                </div>

                {/* new password confirm */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Confirm new password"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeConfirmPasswordHandler}
                    />
                </div>

                {/* submit button */}
                <div className = {styles.button_div}>
                    <Button
                        type = "submit"
                        className = {styles.button_desgin}
                        onClick ={submitUsersUpdateInfo}
                    >Update</Button>
                </div>
            </form>          
        </div>
    )
}
