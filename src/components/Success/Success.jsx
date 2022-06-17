import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
// material ui style imports:
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Success( props ){
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick=()=>{
        //reset states in all reducers before returning to start page
        dispatch({type: 'RESET'});
        history.push('/')
    }
     
    return(
        <Paper className='paper' elevation={3}>
            <h2>Success!</h2>
            <div>
            <h3>Thank You!</h3>
            <Button
                variant='outlined'
                onClick={handleClick}>
                Leave New Feedback
            </Button>
            </div>
        </Paper>
    );
}

export default Success;