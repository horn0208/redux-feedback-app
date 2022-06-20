import React from 'react';
import axios from 'axios';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
// components:
import Comments from '../Comments/Comments.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      
      <HashRouter>
        <Route path="/" exact>
          <Header />
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Header />
          <Understanding />
        </Route>
        <Route path="/support">
          <Header />
          <Support />
        </Route>
        <Route path="/comments">
          <Header />
          <Comments />
        </Route>
        <Route path="/review">
          <Header />
          <Review />
        </Route>
        <Route path ="/success">
          <Header />
          <Success />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;