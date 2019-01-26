import React, { Component } from 'react';
import YouTube from 'react-youtube';
import TextTruncate from 'react-text-truncate';
import CircularProgressbar from 'react-circular-progressbar';
import './DetailFilm.css'

export default class MovieDetail extends Component {
  render(){
    const opts = {
      height: '360',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return(
      <main className="main" role="main">

        <div className="movie-details">
          <div className="movie_image">
            <img src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
          </div>
          <div className="details-body">
            <h1 className="movie-details_title">Superman</h1>
            <h2 className="boldline">IS BACK</h2>
            button ispurchased
            <p className="movie-details_body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Bismillah you nice keep going. You will finish this, even that you still have 1 day again</p>
            <div className="list">
              <p className="movie-details_rating">Rating : <span>6</span></p>
              <p className="movie-details_date">Release date : <span>2018-12-06</span></p>
              <p>Duration : <span>128 min</span></p>
              <p>Genres : <span>Action | Sci-fi</span></p>
              <p>Revenue : <span>$73,051,040</span></p>
              <br />
              <button className="btn_buy">Rp. 1,780</button>
            </div>
            <br /><br /><br /><br /><br />
          </div>

          <div className="col-sm-12">
          <h3 className="text-left">Casts :</h3>
          <div className="col-md-2">
            <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
            <p>Bambang as Himself</p>
          </div>

          <div className="col-md-2">
            <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
            <p>Bambang as Himself</p>
          </div>

          <div className="col-md-2">
            <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
            <p>Bambang as Himself</p>
          </div>

          <div className="col-md-2">
            <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
            <p>Bambang as Himself</p>
          </div>

          <div className="col-md-2">
            <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
            <p>Bambang as Himself</p>
          </div>

          <div className="col-md-2">
            <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
            <p>Bambang as Himself</p>
          </div>
          </div>

          <div className="col-sm-12">
            <h2 className="text-center">Trailers</h2>
            <div className="col-sm-6">
              <YouTube
                videoId="Ql5H38HJyqA"
                opts={opts}
                onReady={this._onReady}
                />
              <div className="trailerdesc">
                <span>Nama Trailer</span>
              </div>
            </div>

            <div className="col-sm-6">
              <YouTube
                videoId="5W0A4ZG_lLE"
                opts={opts}
                onReady={this._onReady}
                />
              <div className="trailerdesc">
                <span>Nama Trailer</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <h2 className="text-center">Film Serupa</h2>
            <div className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
              <p>Bambang as Himself</p>
              </div>
            </div>

            <div className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
              <p>Bambang as Himself</p>
              </div>
            </div>

            <div className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
              <p>Bambang as Himself</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <h2 className="text-center">Rekomendasi Film</h2>
            <div className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
              <p>Bambang as Himself</p>
              </div>
            </div>

            <div className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
              <p>Bambang as Himself</p>
              </div>
            </div>

            <div className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <img className="profile_image" src={"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg"} alt='superman' />
              <p>Bambang as Himself</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    )
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

}
