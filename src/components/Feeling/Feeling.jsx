import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

function Feeling( props ){
    // feelings hook
    const [ feel, setFeel ] = useState( 0 );
    // hook for rendering link in button
    const [showLink, setShowLink] = useState(false);

    const dispatch = useDispatch();

    const handleChange =()=>{
        setFeel(event.target.value);
        console.log(feel);
        // check inputs before rendering link. useEffect listens for change in feel state
        
    }
    useEffect(()=>{
        console.log('in useEffect:', showLink, feel);
        if (feel>=1 && feel<=5){
            console.log('inputs are good');
            // set showLink to true and render link in button
            setShowLink(true);
        } else {
            setShowLink(false);
        }
    },[feel])

    const handleClick =()=>{
        console.log('in feeling handleClick:', feel);
        if(showLink){
            dispatch({type: "CHANGE_FEEL", payload: feel});
        } else {
            alert('Please enter a whole number between 1-5');
        }
    }

    // validate inputs--might move to app.jsx and pass to components as props
    // function validate (value){
    //     if (value>=1 && value<=5){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
     
    return(
        <div>
            <h2>How are you feeling today?</h2>
            <h3>Feeling?</h3>
            <input type="number" onChange={handleChange}/>
            <button onClick={handleClick} >
                {showLink?
                <a href='/#/understanding'>Next</a>
                :
                'Next'
                }
            </button>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Feeling;