import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { IoEllipsisVertical } from "react-icons/io5";
import { AiTwotoneLike , AiOutlineLike } from "react-icons/ai";
import {FaCommentDots, FaRegShareSquare} from "react-icons/fa";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function PostView(props) {
    ///// recieving props
    const {
        item ,
        open,
        anchorEl,
        noOfLikes,
        isLiked,
        authorisedUserDetails,
        onClickLikeButtonHandler,
        onClickCommentButtonHandler,
        onClickShareButtonHandler,
        handleOptionSelectionOpener ,
        selectedOptionHandler , 
        handleClose
    } = props;

    ///styling constants
    const useStyles = makeStyles((theme) => ({
        root:{
            display : 'flex',
            backgroundColor : '#fdffe0',
            width : '85.5ch',
            // height : '29ch',
            flexDirection : 'column',
            borderRadius : '8px',
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
        },
        totalLikesComments:{
            display : 'flex',
            flexDirection : 'row'
        },
        totalLikes:{
            display : 'flex',
            minWidth : '85%',
            paddingBottom : '.5ch'
        },
        totalComments:{
            // minWidth : '40%'
        },
        likeCommentShareButtonsContainer:{
            display : 'flex',
            flexDirection : 'row',
            marginBottom : '1ch',
            minHeight : '4ch',
            marginTop : '1ch',
            // borderRadius : '10ch'
        },
        likeButtonContainer:{
            display : 'flex',
            minHeight : '100%',
            alignItems : 'center',
            justifyContent :'center',
            // backgroundColor : 'red',
            minWidth : '33%',
            borderTopLeftRadius : '10ch',
            borderBottomLeftRadius : '10ch',
        },
        commentButtonContainer:{
            display : 'flex',
            minHeight : '100%',

            alignItems : 'center',
            justifyContent :'center',
            // backgroundColor : 'green',
            minWidth : '33%',
            marginLeft : '.5ch'
        },
        shareButtonContainer:{
            display : 'flex',
            minHeight : '100%',
            alignItems : 'center',
            justifyContent :'center',
            // backgroundColor : 'blue',
            minWidth : '34%',
            borderTopRightRadius : '10ch',
            borderBottomRightRadius : '10ch',
            marginLeft : '.5ch'
        },
        likeButtonStyle:{
            width : '100%',
            minHeight : '100%',
            borderTopLeftRadius : '10ch',
            borderBottomLeftRadius : '10ch',
            backgroundColor : '#d9d5c1',
            border : 'none'
        },
        commentButtonStyle:{
            width : '100%',
            minHeight : '100%',
            backgroundColor : '#d9d5c1',
            border : 'none'
        },
        shareButtonStyle:{
            width : '100%',
            minHeight : '100%',
            borderTopRightRadius : '10ch',
            borderBottomRightRadius : '10ch',
            backgroundColor : '#d9d5c1',
            border : 'none'
        },
        


    }));
    const styles = useStyles();
    const likes = 20;
    const comments = 19;
    const ITEM_HEIGHT = 40;
    const options = [
        'Edit',
        'Delete'
    ];

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
                        <div>
                            {
                                (item.userId === authorisedUserDetails.userId) ? (
                                    <div className = {styles.post_options}>
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
                                ): ""
                            }
                        </div>
                        
                    </div>
                    
                    {/* post text */}
                    <div className = {styles.post_text}>
                        <p className = {styles.post_text_p}> {item.postDescription} </p>
                    </div>
                    
                    <br/>
                    <div className = {styles.totalLikesComments}>
                        <div className = {styles.totalLikes}>
                            {/* <AiTwotoneLike size = "17"/>
                             */}
                             <label>{noOfLikes} {(noOfLikes < 2) ? "Like" : "Likes"}</label>
                        </div>
                        <div className = {styles.totalComments}>
                            <label>{comments} comments</label>
                        </div>
                    </div>
                    <Divider/>
                    <div className = {styles.likeCommentShareButtonsContainer}>
                        <div className = {styles.likeButtonContainer}>
                            <button
                                className = {styles.likeButtonStyle}
                                onClick = {onClickLikeButtonHandler}
                            >
                                {
                                    isLiked ? <AiTwotoneLike size = "18" /> : <AiOutlineLike size = "18" />
                                } 
                            </button>
                        </div>
                        <div className = {styles.commentButtonContainer}>
                            <button 
                                className = {styles.commentButtonStyle}
                                onClick = {onClickCommentButtonHandler}
                            >
                                <FaCommentDots size = "18"/>
                            </button>
                        </div>
                        <div className = {styles.shareButtonContainer}>
                            <Button
                                className = {styles.shareButtonStyle}
                                onClick = {onClickShareButtonHandler}
                            >
                                <FaRegShareSquare size = "18" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
