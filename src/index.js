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
    }
    console.log('feelReducer:',state);
    return state;
}
const understandReducer = (state=0, action) =>{
    if (action.type === 'CHANGE_UNDERSTAND'){
        state = action.payload;
    }
    console.log('understandReducer:',state);
    return state;
}
const supportReducer = (state=0, action) =>{
    if (action.type === 'CHANGE_SUPPORT'){
        state = action.payload;
    }
    console.log('supportReducer:',state);
    return state;
}

// Create store, combine reducers
const store = createStore(
    combineReducers({
        feelReducer,
        understandReducer,
        supportReducer
    })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
