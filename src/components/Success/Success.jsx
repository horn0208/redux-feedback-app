import { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Success( props ){
    const history = useHistory();

    const handleClick=()=>{
        //NEED TO RESET STATE IN REDUCERS HERE before history.push

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