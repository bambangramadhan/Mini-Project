import React, { Component } from 'react'
import TextTruncate from 'react-text-truncate';
import CircularProgressbar from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';

export default class ListFilm extends Component {

  render(){
    return(
      <div className="container_card">
	      <div className="movie-card">

		      <div className="movie-header manOfSteel">
			      <div className="header-icon-container">
				      <NavLink to="/detail">
					      <i className="material-icons header-icon"></i>
				      </NavLink>
			      </div>
		      </div>

		      <div className="movie-content manOfSteel">

		        <div className="movie-content-header">
				      <NavLink to="/detail">
					        <h3 className="movie-title">Man of Steel</h3>
				       </NavLink>
				       <div className="imax-logo">
                  <div style={{ width: '50px' }}>
                    <CircularProgressbar percentage={5 + '0'} text={5} />
                  </div>
              </div>
			      </div>
          <br />
					<TextTruncate
          line={3}
          truncateText="…"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Bismillah you nice keep going. You will finish this, even that you still have 1 day again"

          />

        <div className="movie-info">

          <div className="info-section">
            <label>year</label>
            <span>2016</span>
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



      <div className="movie-card">

        <div className="movie-header bladeRunner2049">
          <div className="header-icon-container">
          <NavLink to="/detail">
            <i className="material-icons header-icon"></i>
          </NavLink>
          </div>
        </div>

        <div className="movie-content manOfSteel">

          <div className="movie-content-header">
          <NavLink to="/detail">
              <h3 className="movie-title">Man of Steel</h3>
           </NavLink>
            <div className="imax-logo">
              <div style={{ width: '50px' }}>
                <CircularProgressbar percentage={5 + '0'} text={5} />
              </div>
            </div>
          </div>
        <br />
        <TextTruncate
        line={3}
        truncateText="…"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Bismillah you nice keep going. You will finish this, even that you still have 1 day again"

        />

      <div className="movie-info">

        <div className="info-section">
          <label>year</label>
          <span>2016</span>
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


    <div className="movie-card">

      <div className="movie-header theDarkTower">
        <div className="header-icon-container">
        <NavLink to="/detail">
          <i className="material-icons header-icon"></i>
        </NavLink>
        </div>
      </div>

      <div className="movie-content bladeRunner2049">

        <div className="movie-content-header">
        <NavLink to="/detail">
            <h3 className="movie-title">Man of Steel</h3>
         </NavLink>
        <div className="imax-logo">
        <div style={{ width: '50px' }}>
          <CircularProgressbar percentage={5 + '0'} text={5} />
        </div>
        </div>
      </div>
      <br />
      <TextTruncate
      line={3}
      truncateText="…"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Bismillah you nice keep going. You will finish this, even that you still have 1 day again"

      />

    <div className="movie-info">

      <div className="info-section">
        <label>year</label>
        <span>2016</span>
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


  <div className="movie-card">

    <div className="movie-header manOfSteel">
      <div className="header-icon-container">
      <NavLink to="/detail">
        <i className="material-icons header-icon"></i>
      </NavLink>
      </div>
    </div>

    <div className="movie-content manOfSteel">

      <div className="movie-content-header">
      <NavLink to="/detail">
          <h3 className="movie-title">Man of Steel</h3>
       </NavLink>
      <div className="imax-logo">
      <div style={{ width: '50px' }}>
        <CircularProgressbar percentage={5 + '0'} text={5} />
      </div>
      </div>
    </div>
    <br />
    <TextTruncate
    line={3}
    truncateText="…"
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Bismillah you nice keep going. You will finish this, even that you still have 1 day again"

    />

  <div className="movie-info">

    <div className="info-section">
      <label>year</label>
      <span>2016</span>
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

</div>
    )
  }
}
