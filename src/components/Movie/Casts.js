import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../../actions'
import loader from '../../img/puff.svg';

class Casts extends Component {

  componentDidMount(){
    const movieID = this.props.movieID;
    this.props.actions.getCasts(movieID);
  }

  render(){
    const {casts} = this.props

    if (this.props.loading) {
      return <img className="loader" src={loader} alt="" />;
    }else{
      return(
        <div className="col-md-12">
        {casts.map((item) => {
          let profile_img = `https://image.tmdb.org/t/p/w500${item.profil_path}`;
          if(item.profile_path === 'null' || typeof item.profile_path !== 'string'){
            profile_img = 'https://www.brikatsuper.com/storages/2018/04/no_photo.jpg';
          }
          return(
            <div key={item.id} className="col-md-2 card-detail">
              <div className="movie-header_detail">
                <img className="profile_image" src={profile_img} alt={item.name} />
                <div className="movie-card__content">
                <h3 className="movie-card-content__title">{item.name}</h3>
                <p className="movie-card-content__text">{item.character}</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return{
    casts: state.casts,
    loading: state.loading
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
