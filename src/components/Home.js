import React, { Component } from 'react';
import ListMovie from './Movie/ListMovie'
import Menu from './Menu'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Menu />

        <ListMovie />
      </div>
    )
  }
}
