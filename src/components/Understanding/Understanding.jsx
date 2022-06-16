import { useState } from 'react';
import {useDispatch} from 'react-redux';

function Understanding( props ){
    // understand hook
    const [ understand, setUnderstand ] = useState( 0 );
    const dispatch = useDispatch();

    const handleChange =()=>{
        setUnderstand(event.target.value);
    }

    const handleClick =()=>{
        console.log('in understand handleClick:', understand);
        dispatch({type: "CHANGE_UNDERSTAND", payload: understand});
    }
     
    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <h3>Understanding?</h3>
            <input type="number" onChange={handleChange}/>
            <button onClick={handleClick}>Next</button>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Understanding;