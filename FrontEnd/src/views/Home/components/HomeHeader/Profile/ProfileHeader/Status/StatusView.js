import React from 'react'
import axios from 'axios'
import PostLists from '../../../../PostLists'
import {PORT} from '../../../../../../../backEndPort'

export default function StatusView(props) {

    const {authorisedUserDetails} = props;
    const [userPostItemsIntel, setUserPostItemsIntel] = React.useState([])
    
    ///// value will come from backEnd
    //// query to find out the filtered posts ... those are posted by the user
    React.useEffect(() => {
        axios.post(`http://localhost:${PORT}/userPosts` , {authorisedUserDetails})
            .then((res) =>{
                if(res.data.length){
                    setUserPostItemsIntel(res.data)
                    console.log(res.data)
                } else {
                    console.log('no data found')
                }
            })
    }, [])

    return (
        <PostLists 
            authorisedUserDetails = {authorisedUserDetails}
            postItemsIntel = {userPostItemsIntel}
        />
    )
}