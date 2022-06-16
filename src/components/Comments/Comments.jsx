import { useState } from 'react';
import {useDispatch} from 'react-redux';

function Comments( props ){
    // template hook
    const [ comment, setComment ] = useState( '' );
    const dispatch = useDispatch();

    const handleChange =()=>{
        setComment(event.target.value);
    }
    
    const handleClick =()=>{
        console.log('in comments handleClick:', comment);
        dispatch({type: "CHANGE_COMMENT", payload: comment});
    }
     
    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <h3>Comments?</h3>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Next</button>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Comments;