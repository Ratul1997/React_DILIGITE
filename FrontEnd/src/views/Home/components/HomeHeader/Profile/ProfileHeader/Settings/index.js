import React, { useState } from 'react'
import Settings from './Settings';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import  {myFormattedTime} from '../../../../../../../functions/utilities'
import {PORT} from '../../../../../../../backEndPort'

export default function (props) {
    const {authorisedUserDetails, setAuthorisedUserDetails} = props;

    const [isChanged, setIsChanged] = useState(false)
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [isSame, setIsSame] = useState()
    const [updateUserDetails, setUpdateUserDetails] = useState({
        userId: authorisedUserDetails.userId,
        userHandleName : authorisedUserDetails.userHandle,
        userPassword : authorisedUserDetails.userPassword,
        userName : authorisedUserDetails.userName,
        userEmailAddress : authorisedUserDetails.userEmailAddress,
        userPhoneNumber : authorisedUserDetails.userPhoneNumber,
        userUpdatedTime : ""
    })
    const [tempPasswordStorage, setTempPasswordStorage] = useState({
        currentPassword: "",
        password1: "",
        password2 : ""
    })
    const [isAllSet, setIsAllSet] = useState(false)
    
    ///////////////////////////////////////////////////////////// controller portion   /////////////////////////////////////////////////////////////////


    const postUpdatedData = () => {
        axios.post(`http://localhost:${PORT}/updateUserInfo` , {updateUserDetails})
            .then((res) =>{
            })
    }

    const getUpdatedData = () => {
        axios.post(`http://localhost:${PORT}/userInfo` , {updateUserDetails})
            .then((res) =>{
                if(res.data.length){
                    setAuthorisedUserDetails(res.data[0])
                } else {
                    console.log('no data')
                }
            })
    }

    React.useEffect(()=>{
        ///// saving to database ///////
        postUpdatedData();
        getUpdatedData();
    } , [isAllSet])


    // getting user handle name
    const onChangeHandleNameHandler = (e) =>{
        if(e.target.value) {
            setUpdateUserDetails({
                ...updateUserDetails, userHandleName : e.target.value
            })
        }
    }

    // getting user name
    const onChangeNameHandler = (e) =>{
        if(e.target.value) {
            setUpdateUserDetails({
                ...updateUserDetails, userName : e.target.value
            })
        }
    }

    // getting user email
    const onChangeEmailHandler = (e) =>{
        if(e.target.value) {
            setUpdateUserDetails({
                ...updateUserDetails, userEmailAddress : e.target.value
            })
        }
    }

    // getting user phoneNumber
    const onChangePhoneNumberHandler = (e) =>{
        if(e.target.value) {
            setUpdateUserDetails({
                ...updateUserDetails, userPhoneNumber : e.target.value
            })
        }
    }

    const onChangeCurrentPasswordHandler = (e) =>{
        setTempPasswordStorage({
            ...tempPasswordStorage , currentPassword : e.target.value
        });
    }

    // getting user first password
    const onChangeFirstPasswordHandler = (e) =>{
        setTempPasswordStorage({
            ...tempPasswordStorage , password1 : e.target.value
        });
    }

    // getting user confirm password
    const onChangeConfirmPasswordHandler = (e) =>{
        setIsChanged(true)
        if(e.target.value === tempPasswordStorage.password1){
            setIsSame(true);
            setUpdateUserDetails({
                ...updateUserDetails, userPassword : e.target.value
            })
        }else{
            setIsSame(false)
        }
        
    }

    // handling sign in button
    const submitUsersUpdateInfo = (e) =>{
        e.preventDefault();
        if(tempPasswordStorage.currentPassword === authorisedUserDetails.userPassword) {
            setUpdateUserDetails({
                ...updateUserDetails , userUpdatedTime : myFormattedTime()
            })
            setIsAllSet(true);
        } else {
            alert('!!! Check current password !!!')
        } 
    }

    return (
        <div>
            <Settings
                isSame = {isSame}
                isChanged = {isChanged}
                updateUserDetails = {updateUserDetails}
                tempPasswordStorage = {tempPasswordStorage}
                onChangeHandleNameHandler = {onChangeHandleNameHandler}
                onChangeNameHandler = {onChangeNameHandler}
                onChangeEmailHandler = {onChangeEmailHandler}
                onChangePhoneNumberHandler = {onChangePhoneNumberHandler}
                onChangeCurrentPasswordHandler = {onChangeCurrentPasswordHandler}
                onChangeFirstPasswordHandler = {onChangeFirstPasswordHandler}
                onChangeConfirmPasswordHandler = {onChangeConfirmPasswordHandler}
                submitUsersUpdateInfo = {submitUsersUpdateInfo}
            />
        </div>
    )
}
