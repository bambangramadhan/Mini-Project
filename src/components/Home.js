import React, { Component } from 'react';
import Movies from './Movies'
import Menu from './Menu'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Menu />
        <Movies />
      </div>
    )
  }
}
