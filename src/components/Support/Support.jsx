import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
// material ui style imports:
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Support( props ){
    // support hook
    const [ support, setSupport ] = useState( 0 );

    const dispatch = useDispatch();
    const history = useHistory();
    // set 'support' state to user's input
    const handleChange =()=>{
        setSupport(Number(event.target.value)); 
    }

    const handleClick =()=>{
        console.log('in support handleClick:', support);
        // make sure input is 1-5 and not empty
        if(support>=1 && support<=5 && support !==''){
            // if so, dispatch support to store and go to next view
            dispatch({type: "CHANGE_SUPPORT", payload: support});
            history.push('/comments');
        } else {
            alert('Please enter a whole number between 1-5');
        }
    }
     
    return(
        <Paper className='paper' elevation={3}>
        <h2>How well are you being supported?</h2>
        <TextField
            label="Support (1-5)?"
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

export default Support;