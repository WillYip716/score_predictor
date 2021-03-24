import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Week from './components/week';
import NavbarComp from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
        <Route path="/" exact component={Home} />
        <Route path="/week/:week" exact component={Week} />
        <Route path="/about" exact component={About} />
    </div>
  );
}
export default App;
