import React, { Component } from 'react';

export default class Menu extends Component {
  render(){
    return(
      <div>
        <header>
          <div className="content">
            <div className="sub_media">
              <div className="left_bar">
                <a>Home</a>
              </div>

              <div className="right_bar">
              
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
