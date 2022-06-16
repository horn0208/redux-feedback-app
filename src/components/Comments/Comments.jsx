import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments( props ){
    // template hook
    const [ comment, setComment ] = useState( '' );

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange =()=>{
        setComment(event.target.value);
    }
    
    const handleClick =()=>{
        console.log('in comments handleClick:', comment);
        dispatch({type: "CHANGE_COMMENT", payload: comment});
        history.push('/review')
    }
     
    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <h3>Comments?</h3>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default Comments;