import React, { Component } from 'react'
import TextTruncate from 'react-text-truncate';
import CircularProgressbar from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';

export default class ListFilm extends Component {


  render(){

    const {movie, actions} = this.props
    const baseUrl = 'https://image.tmdb.org/t/p/';
    console.log(movie);
    const movies = movie.map((items, index) => {
      const cardStyles = {
        backgroundImage: `url(${baseUrl}w780${items.poster_path})`,
      };
      return(
        <div className="movie-card" key={index} style ={ cardStyles }>

          <div className="movie-header">
            <div className="header-icon-container">
              <NavLink to="/detail">
                <i className="material-icons header-icon"></i>
              </NavLink>
            </div>
          </div>

          <div className="movie-content">

            <div className="movie-content-header">
              <NavLink to="/detail">
                <h3 className="movie-title">{items.title}</h3>
              </NavLink>
              <div className="imax-logo">
                <div style={{ width: '50px' }}>
                  <CircularProgressbar percentage={items.vote_average * '10'} text={items.vote_average} />
                </div>
              </div>
            </div>
          <br />

          <div className="movie-info">
          <TextTruncate
            line={3}
            truncateText="…"
            text={items.overview}
          />
          </div>

            <div className="movie-info">

              <div className="info-section">
                <label>date</label>
                <span>{items.release_date}</span>
              </div>
              <div className="info-section">
                <label>time</label>
                <span>122 min</span>
              </div>
              <div className="info-section">
                <label>Genre</label>
                <span>Action | Sci-Fi</span>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return(
      <div className="container_card">
        {movies}
      </div>
    )
  }
}
