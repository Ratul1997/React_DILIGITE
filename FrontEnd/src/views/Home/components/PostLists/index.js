import axios from 'axios';
import React from 'react'
import PostListitems from './PostListitems'

export default function PostLists(props) {
    const {
        authorisedUserDetails,
        postItemsIntel
    } = props;
    return <PostListitems
                authorisedUserDetails = {authorisedUserDetails}
                postItemsIntel = {postItemsIntel}
            />
}
