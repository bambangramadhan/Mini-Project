import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MovieDetail from './components/Movie/MovieDetail';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail' component={MovieDetail} />
      </Switch>
    );
  }
}

export default App;
