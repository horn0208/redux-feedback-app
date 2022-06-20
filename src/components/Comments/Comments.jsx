import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
// material ui style imports:
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Comments( props ){
    const [ comment, setComment ] = useState( '' );

    const dispatch = useDispatch();
    const history = useHistory();

    // update 'comment' state to hold user's input
    const handleChange =()=>{
        setComment(event.target.value);
    }
    // dispatch comment to store and go to next view
    const handleClick =()=>{
        console.log('in comments handleClick:', comment);
        dispatch({type: "CHANGE_COMMENT", payload: comment});
        history.push('/review')
    }
     
    return(
        <Paper className='paper' elevation={3}>
            <h2>Any comments you want to leave?</h2>
            <TextField
                label="Comments?"
                size='small'
                variant='standard'
                onChange={handleChange}/>
            <br />
            <IconButton
                aria-label='back'
                color='primary'
                onClick={history.goBack} >
                <ArrowBackIcon/>
                </IconButton>
            <IconButton 
                aria-label='next'
                color='primary'
                onClick={handleClick} >
                <ArrowForwardIcon/>
            </IconButton>
    </Paper>
    );
}

export default Comments;