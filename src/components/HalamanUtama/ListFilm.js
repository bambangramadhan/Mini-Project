import React, { Component } from 'react'
import './HalamanUtama.css'

export default class ListFilm extends Component {

  render(){
    return(
      <div className="container">


	<div className="movie-card">
		<div className="movie-header manOfSteel">
			<div className="header-icon-container">
				<a href="#">
					<i className="material-icons header-icon"></i>
				</a>
			</div>
		</div>
		<div className="movie-content">
			<div className="movie-content-header">
				<a href="#">
					<h3 className="movie-title">Man of Steel</h3>
				</a>
				<div className="imax-logo"></div>
			</div>
			<div className="movie-info">
				<div className="info-section">
					<label>Date & Time</label>
					<span>Sun 8 Sept - 10:00PM</span>
				</div>
				<div className="info-section">
					<label>Screen</label>
					<span>03</span>
				</div>
				<div className="info-section">
					<label>Row</label>
					<span>F</span>
				</div>
				<div className="info-section">
					<label>Seat</label>
					<span>21,22</span>
				</div>
			</div>
		</div>
	</div>

	<div className="movie-card">
		<div className="movie-header babyDriver">
			<div className="header-icon-container">
				<a href="#">
					<i className="material-icons header-icon"></i>
				</a>
			</div>
		</div>
		<div className="movie-content">
			<div className="movie-content-header">
				<a href="#">
					<h3 className="movie-title">Baby Driver</h3>
				</a>
				<div className="imax-logo"></div>
			</div>
			<div className="movie-info">
				<div className="info-section">
					<label>Date & Time</label>
					<span>Tue 4 July - 05:00PM</span>
				</div>
				<div className="info-section">
					<label>Screen</label>
					<span>01</span>
				</div>
				<div className="info-section">
					<label>Row</label>
					<span>H</span>
				</div>
				<div className="info-section">
					<label>Seat</label>
					<span>15</span>
				</div>
			</div>
		</div>
	</div>

	<div className="movie-card">
		<div className="movie-header theDarkTower">
			<div className="header-icon-container">
				<a href="#">
					<i className="material-icons header-icon"></i>
				</a>
			</div>
		</div>
		<div className="movie-content">
			<div className="movie-content-header">
				<a href="#">
					<h3 className="movie-title">The Dark Tower</h3>
				</a>
				<div className="imax-logo"></div>
			</div>
			<div className="movie-info">
				<div className="info-section">
					<label>Date & Time</label>
					<span>Wed 16 Aug - 07:00PM</span>
				</div>
				<div className="info-section">
					<label>Screen</label>
					<span>06</span>
				</div>
				<div className="info-section">
					<label>Row</label>
					<span>C</span>
				</div>
				<div className="info-section">
					<label>Seat</label>
					<span>18</span>
				</div>
			</div>
		</div>
	</div>

	<div className="movie-card">
		<div className="movie-header bladeRunner2049">
			<div className="header-icon-container">
				<a href="#">
					<i className="material-icons header-icon"></i>
				</a>
			</div>
		</div>
		<div className="movie-content">
			<div className="movie-content-header">
				<a href="#">
					<h3 className="movie-title">Blade Runner 2049</h3>
				</a>
				<div className="imax-logo"></div>
			</div>
			<div className="movie-info">
				<div className="info-section">
					<label>Date & Time</label>
					<span>Mon 16 Oct - 10:00PM</span>
				</div>
				<div className="info-section">
					<label>Screen</label>
					<span>06</span>
				</div>
				<div className="info-section">
					<label>Row</label>
					<span>D</span>
				</div>
				<div className="info-section">
					<label>Seat</label>
					<span>05,06</span>
				</div>
			</div>
		</div>
	</div>

</div>
    )
  }
}
