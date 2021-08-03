import React from 'react'
import './index.css'
import  {IoIosCheckmark , IoIosClose} from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function SignInForm(props) {
    const {
        isSame ,
        isChanged,
        newUserDetails , 
        tempPasswordStorage,
        onChangeHandleNameHandler,
        onChangeNameHandler,
        onChangeEmailHandler,
        onChangePhoneNumberHandler,
        onChangeFirstPasswordHandler,
        onChangeConfirmPasswordHandler,
        submitNewUsersAllInfo} = props;
    return (
        <div className = "root">
            <form>
                <div className = "form-container">
                    
                    {/* head description */}
                    <div className = "form-title">
                        <h2>Sign Up</h2>
                    </div>

                    {/* handle  */}
                    <div className="form-group">
                        <label >Enter Handle :</label>
                        <input 
                            type="text" 
                            className="form-control-input" 
                            id="userHandle" 
                            aria-describedby="handleHelp"
                            value = {newUserDetails.userHandleName}
                            onChange = {onChangeHandleNameHandler}
                        />
                    </div>

                    {/* name  */}
                    <div className="form-group">
                        <label >Enter Name :</label>
                        <input 
                            type="text" 
                            className="form-control-input" 
                            id="userName" 
                            aria-describedby="nameHelp"
                            value = {newUserDetails.userName}
                            onChange = {onChangeNameHandler}
                        />
                    </div>

                    {/* email */}
                    <div className="form-group">
                        <label >Email address :</label>
                        <input 
                            type="email" 
                            className="form-control-input" 
                            id="userEmail" 
                            aria-describedby="emailHelp" 
                            value = {newUserDetails.userEmailAddess}
                            onChange = {onChangeEmailHandler}
                        />
                    </div>
                    
                    {/* phone nummber  */}
                    <div className="form-group">
                        <label >Enter Phone Number :</label>
                        <input 
                            type="text" 
                            className="form-control-input" 
                            id="userPhoneNumber" 
                            aria-describedby="phoneNumberHelp" 
                            value = {newUserDetails.userPhoneNumber}
                            onChange = {onChangePhoneNumberHandler}
                        />
                    </div>

                    {/* password */}
                    <div className="form-group">
                        <label >Enter Password:</label>
                        <input 
                            type="password" 
                            className="form-control-input" 
                            id="userPassword1" 
                            value = {tempPasswordStorage.password1}
                            onChange = {onChangeFirstPasswordHandler}
                        />
                    </div>

                    {/* confirm password */}
                    <div className="form-group">
                        <label >Confirm Password:</label>
                        <input
                            type="password" 
                            className="form-control-input" 
                            id="userPassword2" 
                            value = {tempPasswordStorage.password2}
                            onChange = {onChangeConfirmPasswordHandler}
                        />
                    </div>

                    {/* password's equal confirmation sign */}
                    {
                        (isChanged) && (
                            <div className = "confirm">
                                {   
                                    // selecting icons
                                    (isSame === true) ? (
                                        <IoIosCheckmark color = "#00f010" />
                                    ) : (
                                        <IoIosClose color = "#cc0e00" />
                                    )
                                }
                            </div>        
                        )
                    } 
                    {/* submit / signIn button */}
                    <div className = "form-group">
                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            onClick = {submitNewUsersAllInfo}
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}
