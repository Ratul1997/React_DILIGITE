import React from 'react'
import Post from './Post'

export default function PostListitems(props) {
    const {
        authorisedUserDetails,
        postItemsIntel
    } = props;    
    return (
        <div>
            <ul type = "none">
                {
                    postItemsIntel.map((item , index) => <Post key = {index} value = {item} authorisedUserDetails = {authorisedUserDetails}/>)
                }
            </ul>
        </div>
    );
}
