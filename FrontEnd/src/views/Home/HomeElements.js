import React from 'react'
import HomeHeader from './components/HomeHeader'
import PostBox from './components/PostBox'
import PostLists from './components/PostLists';
import PostListitems from './components/PostLists/PostListitems'

export default function HomeElements(props) {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const {newPost , authorisedUserDetails, postItemsIntel, setNewPost} = props;

    ////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <HomeHeader
                authorisedUserDetails = {authorisedUserDetails}
            />
            <PostBox 
                newPost = {newPost}
                authorisedUserDetails = {authorisedUserDetails}
                setNewPost = {setNewPost}
            />
            <PostLists 
                postItemsIntel = {postItemsIntel}
            />
        </div>
    )
}
