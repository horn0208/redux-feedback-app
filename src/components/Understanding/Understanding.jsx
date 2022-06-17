import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
// material ui style imports:
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Understanding( props ){
    // understand hook
    const [ understand, setUnderstand ] = useState( 0 );

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange =()=>{
        setUnderstand(Number(event.target.value)); 
    }

    const handleClick =()=>{
        console.log('in understand handleClick:', understand);
        if(understand>=1 && understand<=5 && understand !==''){
            dispatch({type: "CHANGE_UNDERSTAND", payload: understand});
            history.push('/support');
        } else {
            alert('Please enter a whole number between 1-5');
        }    
    }
     
    return(
        <Paper className='paper' elevation={3}>
        <h2>How well are you understanding the content?</h2>
        <TextField
            label="Understanding (1-5)?"
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

export default Understanding;