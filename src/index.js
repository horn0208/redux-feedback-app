import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// Reducers:
const feelReducer = (state=0, action) =>{
    console.log('in feelReducer:', action);
    if (action.type === 'CHANGE_FEEL'){
        state = action.payload;
    }
    console.log('feelReducer:',state);
    return state;
}
const understandReducer = (state=0, action) =>{
    console.log('in understandReducer:', action);
    if (action.type === 'CHANGE_UNDERSTAND'){
        state = action.payload;
    }
    console.log('understandReducer:',state);
    return state;
}


// Create store, combine reducers
const store = createStore(
    combineReducers({
        feelReducer,
        understandReducer
    })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
