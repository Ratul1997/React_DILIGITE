import React from 'react'
import { useHistory } from 'react-router-dom';
import HomeHeaderElements from './HomeHeaderElements'

export default function HomeHeader(props) {
    const {authorisedUserDetails, setAuthorisedUserDetails} = props;

    let history = useHistory();
    const onClickProfileIconHandler = () =>{
        history.push({
            pathname : '/Profile',
            state : {data : authorisedUserDetails}
        })
    }


    return <HomeHeaderElements 
                authorisedUserDetails = {authorisedUserDetails}
                setAuthorisedUserDetails = {setAuthorisedUserDetails}
                onClickProfileIconHandler = {onClickProfileIconHandler}
            />
}
