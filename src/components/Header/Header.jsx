import { useState } from 'react';

function Header( props ){
    // template hook
    const [ hook, setHook ] = useState( null );
     
    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
        </div>
    );
}

export default Header;