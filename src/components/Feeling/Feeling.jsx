import { useState } from 'react';
import {useDispatch} from 'react-redux';

function Feeling( props ){
    // feelings hook
    const [ feel, setFeel ] = useState( 0 );
    const dispatch = useDispatch();
     
    return(
        <div>
            <h2>How are you feeling today?</h2>
            <h3>Feeling?</h3>
            <input type="number" />
            <button>Next</button>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Feeling;