import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import YouTube from 'react-youtube';
import * as AppActions from '../../actions'

class Trailers extends Component {

  componentDidMount(){
    this.props.actions.getTrailers(this.props.movieID);
  }

  render(){
    const {trailers} = this.props
    const opts = {
      height: '360',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    // console.log(this.props);
    return(
      <div>
      {trailers.map((item) => {
        return(
          <div key={item.id} className="col-md-6">
          <YouTube
            videoId={item.key}
            opts={opts}
            onReady={this._onReady}
            />
          <div className="trailerdesc">
            <span>{item.name}</span>
          </div>
          </div>
        )
      })}
      </div>
    )
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

function mapStateToProps(state){
  return{
    trailers: state.trailers
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
)(Trailers)
