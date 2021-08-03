import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button , TextField } from '@material-ui/core';

export default function PostBoxForm(props) {
    const{
        tempNewPost,
        onChangePostDescriptionHandler,
        onSubmitPostDescriptionHandler
    } = props;

    const useStyles = makeStyles((theme) => ({
        root:{
            display : 'flex',
            backgroundColor : '#fdffe0',
            width : '95ch',
            height : '29ch',
            flexDirection : 'column',
            borderRadius : '6px',
            border: 1,
            borderStyle: 'solid',
            marginLeft : '54.5ch'
            
        },
        box:{
            display : 'flex',
            justifyContent : 'center',
            height : '83%',
            width : '95%',
            marginTop : '2%',
            marginLeft : '2%',
        },
        button_div :{
            display : 'flex',
            marginTop : '1ch',
            marginLeft : '86%'
        },
        button_desgin :{
            backgroundColor : '#d6d306'
        },
        tectfield_design:{
            width : '95%',
        }
    }));

    const styles = useStyles();
    return (
        <div className = {styles.root}>
            <form onSubmit = {onSubmitPostDescriptionHandler}>
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="What's on your mind?"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        rows = {5}
                        multiline
                        value = {tempNewPost.postDescription}
                        onChange = {onChangePostDescriptionHandler}
                    />
                </div>
                <div className = {styles.button_div}>
                    <Button
                        type = "submit"
                        className = {styles.button_desgin}
                        onClick ={onSubmitPostDescriptionHandler}
                    >Post</Button>
                </div>
            </form>          
        </div>
    )
}
