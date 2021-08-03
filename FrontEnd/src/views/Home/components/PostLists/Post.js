import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IoEllipsisVertical } from "react-icons/io5";
import { Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect, useHistory } from 'react-router-dom';

export default function PostBox(props) {
    ////////////////////////////////////////////////////////////////////////////////////////////
    const useStyles = makeStyles((theme) => ({
        root:{
            display : 'flex',
            backgroundColor : '#fdffe0',
            width : '85.5ch',
            // height : '29ch',
            flexDirection : 'column',
            borderRadius : '6px',
            border: 1,
            borderStyle: 'solid',
            borderColor : '#c9c9c9',
            fontFamily : 'arial',
            marginLeft : '44.5ch'

        },
        box:{
            display : 'flex',
            justifyContent : 'center',
            height : '83%',
            width : '95%',
            marginTop : '2%',
            marginLeft : '2%',
        },
        container:{
            // backgroundColor : 'blue',
            width : '95%',
            marginLeft : '2%'
        },
        header_details : {
            display : 'flex',
            flexDirection : 'row',
            // backgroundColor : 'red'
        },
        post_text : {
            
        },
        post_details : {
            minWidth : '95%',
            // backgroundColor : 'blue'

        },
        post_options:{
            marginTop : '2ch',
            maxWidth : '5%',
            // backgroundColor:'green',
            // marginLeft : '1ch'
        },
        post_user_name:{
            fontSize : '20px',
            color : '#3d3c38'
            // fontFamily : 'arial'
        },
        post_time:{
            color : '#b0a997',
            // fontFamily : 'arial',
        },
        post_text_p:{
            color : '#3d3c38',
            fontSize : '15px'
        }

    }));
    const styles = useStyles();
    const ITEM_HEIGHT = 40;
    const options = [
        // 'Hide Post',
        'Share Link'
    ];
    
    /// init post item
    const [item, setItem] = useState(props.value)
    /// init menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
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



    /////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <br/>
            <div className = {styles.root}>
                {/* container */}
                <div className = {styles.container}>
                    {/* header portion */}
                    <div className = {styles.header_details}>
                        {/* name and time */}
                        <div className = {styles.post_details}>
                            <p className = {styles.post_user_name}>
                                {item.postUserName}
                            </p>
                            <p className = {styles.post_time}>{item.postInsertedTime}</p>
                        </div>
                        {/* option icon */}
                        <div className = {styles.post_options}>
                            {/* icon button is an equivalent of touchable opacity in react-native */}
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                color="primary"
                                onClick = {handleOptionSelectionOpener}
                            >
                                <IoEllipsisVertical size = "18"/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '18ch',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                <MenuItem key={option} onClick={selectedOptionHandler}>
                                    {option}
                                </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </div>
                    <Divider/>
                    {/* post text */}
                    <div className = {styles.post_text}>
                        <p className = {styles.post_text_p}> {item.postDescription} </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
