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



function App() {

  return (
    <div className='App'>
      <Header />
      <HashRouter>
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>

      </HashRouter>
      
    </div>
  );
}

export default App;


{/* <Feeling /> */}
      {/* <Understanding /> */}
      {/* <Support /> */}
      {/* <Comments /> */}