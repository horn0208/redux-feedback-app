import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review( props ){
    // template hook, may remove
    let [ allResponses, setAllResponses ] = useState( {} );

    const feelReducer = useSelector(store => store.feelReducer);
    const understandReducer = useSelector(store => store.understandReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentReducer = useSelector(store => store.commentReducer);

    const handleClick=()=>{
        console.log('in handleClick');
        //POST request to send reducer values to database

        //then clear out state of reducers
    }

 
     
    return(
        <div>
            <h2>Review your feedback</h2>
            <p>Feelings: {feelReducer}</p>
            <p>Understanding: {understandReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentReducer}</p>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default Review;