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
import loader from '../../img/puff.svg';

class MovieDetail extends Component {
  componentDidMount(){
    let id = this.props.match.params.id.split('-')[0];
    this.props.actions.getMovie(id)
    let bought = [];
    let balance;
    if(this.props.purchasedlist.length !== 0){
      bought = JSON.parse(this.props.purchasedlist);
      balance = bought.balance;
      bought = bought.purchasedlist;
      reactLocalStorage.set('balance', this.props.purchasedlist);
    }else if(reactLocalStorage.get('balance')){
      let JSONbalance = JSON.parse(reactLocalStorage.get('balance'));
      bought = JSONbalance.purchasedlist;
      balance   = JSONbalance.balance;
    }
    this.props.actions.initBalance(balance, bought);
  }

  order(balance, price, movid, bought){
    if(balance < price){
      alert("Insufficient balance");
      return false;
    }else{
      bought.push(movid);
      this.props.actions.balancePurchase(balance-price, bought);
      reactLocalStorage.set('balance',(JSON.stringify({'type': 'BALANCE_FETCH_DATA_SUCCESS','balance': (balance-price),'purchasedlist': bought})));
      return true;
    }
  }

  render(){
    const {movie} = this.props;
    const headerStyles = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`
    };
    // console.log(this.props);
    let movieID = this.props.match.params.id.split('-')[0];
    let movid = parseInt(movieID);
    let price = 0;
    if (this.props.loading) {
      return <div className="loader-overlay"><img className="loader" src={loader} alt="" /></div>;
    }else{
      let bought = [];
      let balance = 0;
      if(this.props.purchasedlist.length !== 0){
        bought = JSON.parse(this.props.purchasedlist);
        balance  = bought.balance;
        bought = bought.purchasedlist;
      }

    if(movie.vote_average < 4){
      price = 3500;
    }else if(movie.vote_average < 7){
      price = 8250;
    }else if(movie.vote_average < 9){
      price = 16350;
    }else{
      price = 21250;
    }
    let buy;
    if(bought.indexOf(movid) < 0){
      buy = <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <button className="btn_buy" onClick={this.order.bind(this, balance, price, movid, bought)}>{value}</button>} />;
    }else{
      buy = <button disabled className="btn_buy active">Bought</button>
    }

    // console.log(movie.poster_path);
    return(
      <main className="main" role="main" style={headerStyles}>

        <nav className="navbar navbar-dark bg-dark">
          <NavLink className="nav-item active" to="/">
            <li className="navbar-brand">Home</li>
          </NavLink>
          <NavLink className="nav-item active" to="/popular">
            <li className="navbar-brand">Popular</li>
          </NavLink>
          <div className="right_bar">
            <h4 style={{color: "blue"}}><NumberFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span>{value}</span>} /></h4>
          </div>
        </nav>

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
              {buy}
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
}

function mapStateToProps(state){
  return{
    movie: state.movie,
    purchasedlist: state.balance,
    loading: state.loading
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
