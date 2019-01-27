import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Movie from './components/Movie/MovieDetail';
import Home from './components/Home';
import './App.css';
import {Provider} from 'react-redux';
import configureStore from './store';

const store  = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Movie} />
      </Switch>
      </Provider>
    );
  }
}

export default App;
