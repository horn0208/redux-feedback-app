import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
// material ui style imports:
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Feeling( props ){
    // feelings hook
    const [ feel, setFeel ] = useState( 0 );

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange =()=>{
        setFeel(Number(event.target.value)); 
    }

    const handleClick =()=>{
        console.log('in feeling handleClick:', feel);
        if(feel>=1 && feel<=5 && feel !==''){
            dispatch({type: "CHANGE_FEEL", payload: feel});
            history.push('/understanding');
        } else {
            alert('Please enter a whole number between 1-5');
        }
    }
     
    return(
        <Paper className='paper' elevation={3}>
            <h2>How are you feeling today?</h2>
            <TextField
                label="Feeling (1-5)?"
                size='small'
                variant='standard'
                onChange={handleChange}/>
            <IconButton 
                aria-label='next'
                color='primary'
                onClick={handleClick} >
                <ArrowForwardIcon/>
            </IconButton>
        </Paper>
    );
}

export default Feeling;