import React, { Component } from 'react';
import Casts from './Casts'
import Related from './Related'
import Recommended from './Recommended'
import Trailers from './Trailers'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format';
import * as AppActions from '../../actions'
import {reactLocalStorage} from 'reactjs-localstorage';
import { NavLink } from 'react-router-dom'

class MovieDetail extends Component {
  componentDidMount(){
    reactLocalStorage.set('balance', this.props.actions.getBalance);
    let id = this.props.match.params.id.split('-')[0];
    this.props.actions.getMovie(id)
  }

  order(balance, price, movid, purchased, e){
    if(balance < price){
      alert("Insufficient balance");
      return false;
    }else{
      purchased.push(movid);
      this.props.UpdateBalance(balance-price, purchased);
      reactLocalStorage.set('balance',(JSON.stringify({'type': 'BALANCE_FETCH_DATA_SUCCESS','balance': (balance-price),'purchasedlist': purchased})));
      return true;
    }
  }

  render(){
    const {movie, actions} = this.props;
    // console.log(this.props.movie);
    let movieID = this.props.match.params.id.split('-')[0];
    let price = 0;
    if(movie.vote_average < 4){
      price = 3500;
    }else if(movie.vote_average < 7){
      price = 8250;
    }else if(movie.vote_average < 9){
      price = 16350;
    }else{
      price = 21250;
    }
    let purchased;
    if(true){
      purchased = <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <button className="btn_buy">{value}</button>} />;
    }else{
      purchased = <button disabled className="btn_buy active">Purchase</button>
    }

    const headerStyles = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`
    };

    // console.log(movie.poster_path);
    return(
      <main className="main" role="main" style={headerStyles}>

      <div className="topnav">
        <NavLink to="/">Home</NavLink>
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
              {purchased}
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
