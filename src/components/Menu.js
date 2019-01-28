import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format';
import * as AppActions from '../actions'

class Menu extends Component {
  componentDidMount(){
    let purchased = [];
    let balance;
    if(this.props.purchasedlist.length !== 0){
      purchased = JSON.parse(this.props.purchasedlist);
      balance = purchased.balance;
      purchased = purchased.purchasedlist;
      reactLocalStorage.set('balance', this.props.purchasedlist);
    }else if(reactLocalStorage.get('balance')){
      let JSONbalance = JSON.parse(reactLocalStorage.get('balance'));
      purchased = JSONbalance.purchasedlist;
      balance   = JSONbalance.balance;
    }
    this.props.actions.initBalance(balance, purchased);
  }

  render(){
    let purchased = [];
    let balance = 0;
    if(this.props.purchasedlist.length !== 0){
      purchased = JSON.parse(this.props.purchasedlist);
      balance  = purchased.balance;
      purchased = purchased.purchasedlist;
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
              </div>

              <div className="right_bar">
                <h3><NumberFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <span>{value}</span>} /></h3>
              </div>
            </div>
          </div>

          <form className="header__search header__search--active">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="header__search-content">
                    <input type="text" placeholder="Search for a movie ..."  />
                    <button type="button">search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </header>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    purchasedlist: state.balance
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
)(Menu)
