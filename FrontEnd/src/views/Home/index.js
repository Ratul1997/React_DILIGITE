import axios from 'axios';
import React , {useState} from 'react'
import { useLocation } from 'react-router-dom';
import PostBox from './components/PostBox'
import HomeElements from './HomeElements'
import {PORT} from '../../backEndPort'

// postId : "",
// userId : "",
export default function Home(props) {
    const [postItemsIntel, setPostItemsIntel] = useState([]);
    let location = useLocation()

    ////////////////////////////////////////////     model portion     ///////////////////////////////////////
    const [newPost, setNewPost] = useState()
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(location.state.data);
    
    ///////////////////////////////////////////        controller     ///////////////////////////////////////////

    axios.get(`http://localhost:${PORT}/postListItems`)
    .then((res)=>{
        setPostItemsIntel(res.data);
    })

    ///////////////////////////////////////   view   /////////////////////////////////////////////////////
    return <HomeElements 
                newPost = {newPost}
                authorisedUserDetails = {authorisedUserDetails}
                postItemsIntel = {postItemsIntel}
                setNewPost = {setNewPost}
                
            />
}
