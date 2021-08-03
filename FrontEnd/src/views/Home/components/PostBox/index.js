import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { PostModel } from '../../../../model/PostModel.js';
import PostBoxForm from './PostBoxForm'
import {PORT} from '../../../../backEndPort'
import { myFormattedTime } from '../../../../functions/utilities.js';

export default function PostBox(props) {
    

    /////////////////////////////////////////////////////////////   model /////////////////////////////////////////////////////////////

    const {newPost , authorisedUserDetails , setNewPost} = props;

    const [tempNewPost, setTempNewPost] = useState(new PostModel("",authorisedUserDetails.userHandle,authorisedUserDetails.userId));
    const [isAllSet, setIsAllSet] = useState()
    
    ///////////////////////////////////////////////////////////// controller //////////////////////////////////////////////////////////

    
    useEffect(() => {
        /// saving the post
        if(tempNewPost.postDescription !== ""){
            const result = axios.post(`http://localhost:${PORT}/postNewElements`, {tempNewPost})
            if(result){
                console.log(result);
            }
            setNewPost(tempNewPost);
            setTempNewPost(new PostModel("",authorisedUserDetails.userHandle,authorisedUserDetails.userId));        
        }
        setIsAllSet(false);
    }, [isAllSet])

    // post description changing handler
    const onChangePostDescriptionHandler = (e) =>{
        setTempNewPost({
            ...tempNewPost, postDescription : e.target.value
        })
    }

    // post publishing conformation

    const onSubmitPostDescriptionHandler = (e) =>{
        e.preventDefault();
        
        //// setting formatted time
        setTempNewPost({
            ...tempNewPost, postInsertedTime : myFormattedTime()
        })
        //// post is ready to save
        setIsAllSet(true);
    }

    //////////////////////////////////////////////////////////// view /////////////////////////////////////////////////////////////////
    
    return <PostBoxForm
                tempNewPost = {tempNewPost}
                onChangePostDescriptionHandler = {onChangePostDescriptionHandler}
                onSubmitPostDescriptionHandler = {onSubmitPostDescriptionHandler}
            />
}
