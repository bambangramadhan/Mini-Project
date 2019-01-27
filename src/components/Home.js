import React, { Component } from 'react';
import ListMovie from './Movie/ListMovie'
import Menu from './Menu'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions/movie'

class Home extends Component {
  componentDidMount(){
      this.props.actions.loadMovie("https://api.themoviedb.org/3/movie/now_playing?api_key=5934c9098581e262e81b72718dbc9b0a&region=ID&page=1");
    }

  render(){
    // console.log(this.props);
    return(
      <div>
        <Menu />

        <ListMovie movie={this.props.movie} actions={this.props.actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    movie: state.movie
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
