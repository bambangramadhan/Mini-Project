import React, { Component } from 'react'
import MovieCard from './Movie/MovieCard'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

class Movies extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: ''
    }

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentDidMount(){
    this.props.actions.getMovies(1);
  }

  handleQueryChange(e){
    this.setState({query: e.target.value})
  }

  render(){
    const {movies, actions} = this.props

    let query = this.state.query.trim().toLowerCase()

    let filteredData = movies

    if(query !== ''){
      filteredData =  movies.filter(item => item.title.toLowerCase().startsWith(query))
    }

    let dataNodes = filteredData.map(function(item, index){
      return(
        <MovieCard key={index} movie={item} {...actions} />
      )
    });

    return(
      <div className="container_card">
        {dataNodes}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    movies: state.movies
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
)(Movies)
