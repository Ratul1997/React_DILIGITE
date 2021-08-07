import React from 'react'
import HomeHeader from './components/HomeHeader'
import PostBox from './components/PostBox'
import PostLists from './components/PostLists';

export default function HomeElements(props) {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const {newPost , authorisedUserDetails, setAuthorisedUserDetails, postItemsIntel, setNewPost} = props;

    ////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <HomeHeader
                authorisedUserDetails = {authorisedUserDetails}
                setAuthorisedUserDetails = {setAuthorisedUserDetails}
            />
            <PostBox 
                newPost = {newPost}
                authorisedUserDetails = {authorisedUserDetails}
                setNewPost = {setNewPost}
            />
            <PostLists 
            authorisedUserDetails = {authorisedUserDetails}
                postItemsIntel = {postItemsIntel}
            />
        </div>
    )
}
