import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import TextTruncate from 'react-text-truncate';
import * as AppActions from '../../actions'

class Casts extends Component {

  componentDidMount(){
    const movieID = this.props.movieID;
    this.props.actions.getRelated(movieID);
  }

  render(){
    const {related} = this.props

    // console.log(this.props);
    return(
      <div className="row">
      {related.map((item) => {
        return(
          <div key={item.id} className="col-md-4 card-detail">
            <div className="movie-header_detail">
              <NavLink to={`/${item.id}-${item.original_title.replace(/ /g, '-')}`}>
                <img className="profile_image" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.name} />
                <TextTruncate
                line={1}
                truncateText="…"
                text={item.original_title}
                />
              </NavLink>
            </div>
          </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    related: state.related
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
)(Casts)
