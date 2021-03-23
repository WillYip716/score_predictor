import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home';
import NavbarComp from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
        <Route path="/" exact component={Home} />

    </div>
  );
}
export default App;

