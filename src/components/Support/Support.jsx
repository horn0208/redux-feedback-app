import { useState } from 'react';
import {useDispatch} from 'react-redux';

function Support( props ){
    // support hook
    const [ support, setSupport ] = useState( 0 );
    const dispatch = useDispatch();

    const handleChange =()=>{
        setSupport(event.target.value);
    }

    const handleClick =()=>{
        console.log('in support handleClick:', support);
        dispatch({type: "CHANGE_SUPPORT", payload: support});
    }
     
    return(
        <div>
            <h2>How well are you being supported?</h2>
            <h3>Support?</h3>
            <input type="number" onChange={handleChange}/>
            <button onClick={handleClick}><a href='/#/comments'>Next</a></button>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Support;