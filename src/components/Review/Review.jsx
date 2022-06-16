import { useState } from 'react';

function Review( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
     
    return(
        <div>
            <h2>Review</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Review;