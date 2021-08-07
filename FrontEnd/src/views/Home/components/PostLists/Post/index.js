import React , {useState, useEffect} from 'react'
import PostView from './PostView';
import { useHistory } from 'react-router';
import axios from 'axios';
import {PORT} from '../../../../../backEndPort'

export default function Post(props) {

    // console.log(props);
    /// init post item
    const [item, setItem] = useState(props.value)
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(props.authorisedUserDetails)
    /// init menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [noOfLikes, setNoOfLikes] = useState(item.likes_number)
    const [isLiked, setIsLiked] = useState(false)
    let history = useHistory();

    ////////////////////////////////////////////////////////////////////////////////////////////

    const handleOptionSelectionOpener = (e) =>{
        setAnchorEl(e.currentTarget);
    }

    const selectedOptionHandler = () =>{
        /// selecting a post
        history.push({
            // pathname : `/newfile/${item.postId}`,
            pathname : `/newpage`,
            state : {data : item}
        })
        
    }

    const handleClose = (option) => {
        setAnchorEl(null);
    };

    //// handling action for like button
    const onClickLikeButtonHandler = (e) =>{

        console.log(item);

        if(isLiked === true){
            setNoOfLikes(noOfLikes - 1)
            setIsLiked(false)
        } else{
            setNoOfLikes(noOfLikes + 1)
            setIsLiked(true)
        }
        console.log("like button prossed");
        

    }

    /// handling action for comment button
    const onClickCommentButtonHandler = (e) =>{
        history.push({
            pathname : `/fullpost/${item.postId}`,
            state : {data : item}
        })
        console.log("comment button prossed");
        
    }

    const onClickShareButtonHandler = (e) =>{
        e.preventDefault();
        console.log("share button prossed");
        
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <PostView
                item = {item}
                open = {open}
                anchorEl = {anchorEl}
                noOfLikes = {noOfLikes}
                isLiked = {isLiked}
                authorisedUserDetails = {props.authorisedUserDetails}

                onClickLikeButtonHandler = {onClickLikeButtonHandler}
                onClickCommentButtonHandler = {onClickCommentButtonHandler}
                onClickShareButtonHandler = {onClickShareButtonHandler}
                handleOptionSelectionOpener = {handleOptionSelectionOpener}
                selectedOptionHandler = {selectedOptionHandler}
                handleClose = {handleClose}
            />
        </div>
    )
}
