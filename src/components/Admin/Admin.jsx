import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin( props ){

    const [answers, setAnswers] = useState([]);
    
    //make GET call on page load
    useEffect(()=>{
        fetchAnswers();
    }, []);

    // GET responses from database
    const fetchAnswers=()=>{
        axios.get('/feedback').then((response)=>{
            console.log(response.data);
            // store response in answers array:
            setAnswers(response.data);
        }).catch((err)=>{
            console.log(err);
            alert('Error getting responses');
        })
    }

    return(
        <div>
            <h2>Feedback Results</h2>
            
        </div>
    );
}

export default Admin;