import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage';
import MovieCard from './Movie/MovieCard'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import NumberFormat from 'react-number-format';
import loader from '../img/puff.svg';

class Movies extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: ''
    }

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentDidMount(){
    let bought = [];
    let balance;
    if(this.props.purchasedlist.length !== 0){
      bought = JSON.parse(this.props.purchasedlist);
      balance = bought.balance;
      bought = bought.purchasedlist;
      localStorage.removeItem('balance');
    }else if(reactLocalStorage.get('balance')){
      let JSONbalance = JSON.parse(reactLocalStorage.get('balance'));
      bought = JSONbalance.purchasedlist;
      balance   = JSONbalance.balance;
      localStorage.removeItem('balance');
    }
    this.props.actions.initBalance(balance, bought);
    this.props.actions.getMovies(1);
  }

  handleQueryChange(e){
    this.setState({query: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
  }

  render(){
    // console.log(this.props);
    const {movies, actions, purchasedlist} = this.props

    let query = this.state.query.trim().toLowerCase()

    let filteredData = movies

    if(query !== ''){
      filteredData =  movies.filter(item => item.title.toLowerCase().startsWith(query))
    }

    let dataNodes = filteredData.map(function(item, index){
      return(
        <MovieCard key={index} movie={item} purchasedlist={purchasedlist} {...actions} />
      )
    });

    if (this.props.loading) {
      return <div className="loader-overlay"><img className="loader" src={loader} alt="" /></div>;
    }else{
      // console.log(this.props.balance);
      let balance = 0;
      if(this.props.purchasedlist.length !== 0){
        balance = JSON.parse(this.props.purchasedlist);
        balance = balance.balance;
      }


    return(
      <div>
        <header>
          <div className="content">
            <div className="sub_media">
              <div className="left_bar">
                <NavLink exact to='/'>
                  <h3>Tokoflix</h3>
                </NavLink>
                <NavLink exact to='/'>
                  <h3>Home</h3>
                </NavLink>
                <NavLink exact to='/popular'>
                  <h3>Popular</h3>
                </NavLink>
              </div>

              <div className="right_bar">
                <h3><NumberFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span>{value}</span>} /></h3>
              </div>
            </div>
          </div>

          <form className="header__search header__search--active" onSubmit={this.handleSubmit.bind(this)}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="header__search-content">
                    <input type="text" placeholder="Search for a movie ..." value={this.state.query} onChange={this.handleQueryChange.bind(this)} />
                    <button type="submit">search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </header>

        <div className="container_card">
          {dataNodes}
        </div>
      </div>
      )
    }
  }
}

function mapStateToProps(state){
  return{
    movies: state.movies,
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
)(Movies)
