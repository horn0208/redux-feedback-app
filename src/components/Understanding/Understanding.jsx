import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

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
        <div>
            <h2>How well are you understanding the content?</h2>
            <h3>Understanding?</h3>
            <input type="number" onChange={handleChange}/>
            <br />
            <button onClick={history.goBack} >Back</button>
            <button onClick={handleClick} >Next</button>
        </div>
    );
}

export default Understanding;