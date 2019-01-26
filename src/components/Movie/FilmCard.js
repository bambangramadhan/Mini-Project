import React, { Component } from 'react'

export default class FilmCard extends Component {

  render(){
    return(
      <div>
        <header>
          <div className="content">
            <div className="sub_media">
              <div className="left_bar">
                <ul className="primary">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
                </ul>
              </div>

              <div className="right_bar">
                <ul className="primary">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
                </ul>
              </div>
            </div>
          </div>

          <form className="header__search header__search--active">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="header__search-content">
                    <input type="text" placeholder="Search for a movie, tv show, person..."  />
                    <button type="button">search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>


        </header>

        <div className="content">
        <div className="container">
        <div className="col-sm-6">
        <div className="thumbnail card">
        <div className="row ">
        <div className="col-md-4">
        <img style={{height: 300, width: 180}} src={require('../../img/card.png')} className="w-100" alt="produk"/>
        </div>
        <div className="col-md-8">
        <div className="card-block">
        <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
        <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br /><br /><br />
        <hr />
        <button className="btn btn-primary">Read More</button>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-6">
        <div className="thumbnail card">
        <div className="row ">
        <div className="col-md-4">
        <img style={{height: 300, width: 180}} src={require('../../img/card.png')} className="w-100" alt="produk"/>
        </div>
        <div className="col-md-8">
        <div className="card-block">
        <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
        <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br /><br /><br />
        <hr />
        <button className="btn btn-primary">Read More</button>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="thumbnail card">
        <div className="img-event" >
        <img className="card-img-top" style={{height: 200, width: 245}} src={require('../../img/card.png')} alt="Product" />
        </div>
        <div className="caption card-body">
        <div>
        <h4 className="group card-title inner list-group-item-heading"><b>Title</b></h4>
        <p className="group inner list-group-item-text">This is a description</p>
        <br />
        <div className="row">
        <div className="col-xs-12">
        <h3 className="group card-title inner list-group-item-heading">Rp. 123.000,00-</h3>
        </div>
        </div>
        <div className="row text-right"><hr />
        <div className="col-xs-12 col-md-12">
        <button type="button" className="btn btn-success" to='/detail'>Detail Item</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="thumbnail card">
        <div className="img-event" >
        <img className="card-img-top" style={{height: 200, width: 245}} src={require('../../img/card.png')} alt="Product" />
        </div>
        <div className="caption card-body">
        <div>
        <h4 className="group card-title inner list-group-item-heading"><b>Title</b></h4>
        <p className="group inner list-group-item-text">This is a description</p>
        <br />
        <div className="row">
        <div className="col-xs-12">
        <h3 className="group card-title inner list-group-item-heading">Rp. 123.000,00-</h3>
        </div>
        </div>
        <div className="row text-right"><hr />
        <div className="col-xs-12 col-md-12">
        <button type="button" className="btn btn-success" to='/detail'>Detail Item</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="thumbnail card">
        <div className="img-event" >
        <img className="card-img-top" style={{height: 200, width: 245}} src={require('../../img/card.png')} alt="Product" />
        </div>
        <div className="caption card-body">
        <div>
        <h4 className="group card-title inner list-group-item-heading"><b>Title</b></h4>
        <p className="group inner list-group-item-text">This is a description</p>
        <br />
        <div className="row">
        <div className="col-xs-12">
        <h3 className="group card-title inner list-group-item-heading">Rp. 123.000,00-</h3>
        </div>
        </div>
        <div className="row text-right"><hr />
        <div className="col-xs-12 col-md-12">
        <button type="button" className="btn btn-success" to='/detail'>Detail Item</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="thumbnail card">
        <div className="img-event" >
        <img className="card-img-top" style={{height: 200, width: 245}} src={require('../../img/card.png')} alt="Product" />
        </div>
        <div className="caption card-body">
        <div>
        <h4 className="group card-title inner list-group-item-heading"><b>Title</b></h4>
        <p className="group inner list-group-item-text">This is a description</p>
        <br />
        <div className="row">
        <div className="col-xs-12">
        <h3 className="group card-title inner list-group-item-heading">Rp. 123.000,00-</h3>
        </div>
        </div>
        <div className="row text-right"><hr />
        <div className="col-xs-12 col-md-12">
        <button type="button" className="btn btn-success" to='/detail'>Detail Item</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>


        <h2>hai</h2>


        </div>
        </div>
      </div>

      // <div className="search_bar">
      //   <section className="search">
      //     <div className="sub_media">
      //       <form id="search_form">
      //         <input id="search_v4" type="text" tabindex="2" placeholder="Search for a movie, tv show, person..." />
      //       </form>
      //     </div>
      //   </section>
      // </div>
    )
  }
}
