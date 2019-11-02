import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

import { Switch, Route, Link } from 'react-router-dom'
import { Projects } from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <div className="App">

      <ul>
        <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
      </ul>

      {/* depending on the URL bar match the URL from the options below */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* /shoes/red ==> color === 'red' */}
        {/* /shoes/yellow ==> color === 'yellow' */}
        {/* <Route path='/shoes/:color' component={About} /> */}
        <Route exact path='/projects' component={Projects} />
        {/* Route component is responsible for passing props that 
        include the route parameters (in this case: 'id') */}
        <Route path='/projects/:banana' component={ProjectDetail} />
      </Switch>

    </div>
  );
}

export default App;
