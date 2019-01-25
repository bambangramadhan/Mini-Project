import React, { Component } from 'react'
import './HalamanUtama.css'

export default class ListFilm extends Component {

  render(){
    return(
      <div>
      <h1>Sample Header</h1>

           <nav>
             <ul className="clearfix">
               <li><a href="#">Link 1</a></li>
               <li><a href="#">Link 2</a></li>
               <li><a href="#">Link 3</a></li>
               <li><a href="#">Link 4</a></li>
               <li><a href="#">Link 5</a></li>
             </ul>
           </nav>

      <div className="container">
      <div className="content">

      <br /><br /><br />
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

      </div>
      </div>
      </div>
    )
  }
}
