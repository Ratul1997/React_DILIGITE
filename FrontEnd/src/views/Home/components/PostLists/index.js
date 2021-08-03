import axios from 'axios';
import React from 'react'
import PostListitems from './PostListitems'

export default function PostLists(props) {
    const {postItemsIntel} = props;
    return <PostListitems 
                postItemsIntel = {postItemsIntel}
            />
}
