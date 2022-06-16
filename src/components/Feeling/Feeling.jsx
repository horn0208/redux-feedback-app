import { useState } from 'react';

function Feeling( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
     
    return(
        <div>
            <h2>Feeling</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Feeling;