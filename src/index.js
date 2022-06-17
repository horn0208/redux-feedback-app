import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// Reducers:
const feelReducer = (state=0, action) =>{
    if (action.type === 'CHANGE_FEEL'){
        state = action.payload;
    } else if (action.type === 'RESET'){
        state = 0;
    }
    console.log('feelReducer:',state);
    return state;
}
const understandReducer = (state=0, action) =>{
    if (action.type === 'CHANGE_UNDERSTAND'){
        state = action.payload;
    } else if (action.type === 'RESET'){
        state = 0;
    }
    console.log('understandReducer:',state);
    return state;
}
const supportReducer = (state=0, action) =>{
    if (action.type === 'CHANGE_SUPPORT'){
        state = action.payload;
    } else if (action.type === 'RESET'){
        state = 0;
    }
    console.log('supportReducer:',state);
    return state;
}
const commentReducer = (state=0, action) =>{
    if (action.type === 'CHANGE_COMMENT'){
        state = action.payload;
    } else if (action.type === 'RESET'){
        state = 0;
    }
    console.log('commentReducer:',state);
    return state;
}

// Create store, combine reducers
const store = createStore(
    combineReducers({
        feelReducer,
        understandReducer,
        supportReducer,
        commentReducer
    })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
