import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support( props ){
    // support hook
    const [ support, setSupport ] = useState( 0 );

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange =()=>{
        setSupport(Number(event.target.value)); 
    }

    const handleClick =()=>{
        console.log('in support handleClick:', support);
        if(support>=1 && support<=5 && support !==''){
            dispatch({type: "CHANGE_SUPPORT", payload: support});
            history.push('/comments');
        } else {
            alert('Please enter a whole number between 1-5');
        }
    }
     
    return(
        <div>
            <h2>How well are you being supported?</h2>
            <h3>Support?</h3>
            <input type="number" onChange={handleChange}/>
            <br />
            <button onClick={history.goBack} >Back</button>
            <button onClick={handleClick} >Next</button>
        </div>
    );
}

export default Support;