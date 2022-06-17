import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Review( props ){

    const history = useHistory();

    const feelReducer = useSelector(store => store.feelReducer);
    const understandReducer = useSelector(store => store.understandReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentReducer = useSelector(store => store.commentReducer);

    const handleClick=()=>{
        console.log('in handleClick post:');
        //POST request to send reducer values to database
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelReducer,
                understanding: understandReducer,
                support: supportReducer,
                comments: commentReducer
            }
        }).then((response)=>{
            console.log(response);
            // if post is successful, history.push('/success')

        }).catch((err)=>{
            console.log(err);
            alert('Error saving feedback :(');
        })
    };

 
     
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