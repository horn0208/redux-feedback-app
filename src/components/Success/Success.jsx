import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Success( props ){
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick=()=>{
        //reset states in all reducers before returning to start page
        dispatch({type: 'RESET'});
        history.push('/')
    }
     
    return(
        <div>
            <h2>Success!</h2>
            <div>
            <h3>Thank You!</h3>
            <button onClick={handleClick}>Leave New Feedback</button>
            </div>
        </div>
    );
}

export default Success;