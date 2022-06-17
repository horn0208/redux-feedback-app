import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
// mui style imports:
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Tooltip from '@mui/material/Tooltip';

function Review( props ){

    const history = useHistory();
    // access all the reducer states from the store
    const feelReducer = useSelector(store => store.feelReducer);
    const understandReducer = useSelector(store => store.understandReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentReducer = useSelector(store => store.commentReducer);

    const handleClick=()=>{
        console.log('in handleClick post:');
        //POST request to send reducer values to database
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelReducer,
                understanding: understandReducer,
                support: supportReducer,
                comments: commentReducer
            }
        }).then((response)=>{
            console.log(response);
            // if post is successful, go to next view 
            history.push('/success')

        }).catch((err)=>{
            console.log(err);
            alert('Error saving feedback :(');
        })
    };

 
     
    return(
        <Paper className='paper' elevation={3}>
            <h2>Review your feedback</h2>
            <p>Feelings: {feelReducer}</p>
            <p>Understanding: {understandReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentReducer}</p>
            <Tooltip title="submit">
                <IconButton 
                    aria-label='submit'
                    size='large'
                    color='primary'
                    onClick={handleClick}>
                    <CheckCircleOutlineIcon/>
                </IconButton>
            </Tooltip>
        </Paper>
    );
}

export default Review;