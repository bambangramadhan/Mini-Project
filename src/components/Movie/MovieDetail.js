import React, { Component } from 'react';
import Casts from './Casts'
import Related from './Related'
import Recommended from './Recommended'
import Trailers from './Trailers'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../../actions'

class MovieDetail extends Component {
  componentDidMount(){
    let id = this.props.match.params.id.split('-')[0];
    this.props.actions.getMovie(id)
  }

  render(){
    // console.log(this.props.movie);

    const {movie} = this.props;
    const headerStyles = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`
    };
    let movieID = this.props.match.params.id.split('-')[0];
    // console.log(movie.poster_path);
    return(

      <main className="main" role="main" style={headerStyles}>

      <div className="topnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div className="right_bar">
          <h4 style={{color: "blue"}}>Rp. 100,000</h4>
        </div>
      </div>



        <div className="movie-details">
          <div className="movie_image">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          </div>
          <div className="details-body">
            <h1 className="movie-details_title">{movie.original_title}</h1>
            <h2 className="boldline">{movie.tagline}</h2>
            <p className="movie-details_body">{movie.overview}</p>
            <div className="list">
              <p className="movie-details_rating">Rating : <span>{movie.vote_average}</span></p>
              <p className="movie-details_date">Release date : <span>{movie.release_date}</span></p>
              <p>Duration : <span>{movie.runtime} min</span></p>
              <p>Revenue : <span>{movie.revenue}</span></p>
              <br />
              <button className="btn_buy">Rp. 1,780</button>
            </div>
          </div>

          <div className="col-sm-12">
          <h3 className="text-left">Casts :</h3>

            <Casts movieID={movieID} />

          </div>

          <div className="col-sm-12">
            <h2 className="text-center">Trailers :</h2>
            <Trailers movieID={movieID}/>
          </div>

          <div className="col-sm-6">
            <h2 className="text-center">Related Films :</h2>
            <Related movieID={movieID} />
          </div>

          <div className="col-sm-6">
            <h2 className="text-center">Recommended :</h2>
            <Recommended movieID={movieID}/>
          </div>

        </div>
      </main>
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
)(MovieDetail)
