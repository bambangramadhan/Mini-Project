import * as types from '../constants/ActionTypes'
import request from 'superagent'

const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '5934c9098581e262e81b72718dbc9b0a'

function getMoviesFailure(){
  return {type: types.MOVIES_FAILURE}
}

function getMoviesSuccess(movies){
  return {type: types.MOVIES_SUCCESS, movies}
}

export function getMovies(page){
  return dispatch => {
    return request
    .get(`${API_URL}movie/now_playing?api_key=${API_KEY}&region=ID&page=${page}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(getMoviesFailure())
      }else{
        dispatch(getMoviesSuccess(res.body))
      }
    })
  }
}

function getMovieFailure(){
  return {type: types.MOVIE_FAILURE}
}

function getMovieSuccess(movie){
  return {type: types.MOVIE_SUCCESS, movie}
}

export function getMovie(id){
  return dispatch => {
    return request
    .get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(getMovieFailure())
      }else{
        dispatch(getMovieSuccess(res.body))
      }
    })
  }
}

function getCastsFailure(){
  return {type: types.CASTS_FAILURE}
}

function getCastsSuccess(casts){
  return {type: types.CASTS_SUCCESS, casts}
}

export function getCasts(id){
  return dispatch => {
    return request
    .get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(getCastsFailure())
      }else{
        dispatch(getCastsSuccess(res.body.cast))
      }
    })
  }
}

function getRecommendedFailure(){
  return {type: types.RECOMMENDED_FAILURE}
}

function getRecommendedSuccess(recommended){
  return {type: types.RECOMMENDED_SUCCESS, recommended}
}

export function getRecommended(id){
  return dispatch => {
    return request
    .get(`${API_URL}movie/${id}/recommendations?api_key=${API_KEY}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(getRecommendedFailure())
      }else{
        dispatch(getRecommendedSuccess(res.body.results))
      }
    })
  }
}

function getRelatedFailure(){
  return {type: types.RELATED_FAILURE}
}

function getRelatedSuccess(related){
  return {type: types.RELATED_SUCCESS, related}
}

export function getRelated(id){
  return dispatch => {
    return request
    .get(`${API_URL}movie/${id}/similar?api_key=${API_KEY}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(getRelatedFailure())
      }else{
        dispatch(getRelatedSuccess(res.body.results))
      }
    })
  }
}

function getTrailersFailure(){
  return {type: types.TRAILERS_FAILURE}
}

function getTrailersSuccess(trailer){
  return {type: types.TRAILERS_SUCCESS, trailer}
}

export function getTrailers(id){
  return dispatch => {
    return request
    .get(`${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(getTrailersFailure())
      }else{
        dispatch(getTrailersSuccess(res.body.results))
      }
    })
  }
}

export function balanceFetchDataSuccess(balance, purchasedlist) {
  return {
    type: types.BALANCE_FETCH_DATA_SUCCESS,
    balance,
    purchasedlist
  };
}

export function balancePurchase(remain, purchasedlist) {
  return (dispatch) => {
    dispatch(balanceFetchDataSuccess(remain,purchasedlist));
  }
}

export function initBalance(balance=null, purchasedlist=null) {
  if(balance === null || typeof balance === 'undefined'){
    balance = 100000;
  }
  if(purchasedlist === null || typeof purchasedlist === 'undefined'){
    purchasedlist = [];
  }
  return (dispatch) => {
    dispatch(balanceFetchDataSuccess(balance,purchasedlist));
  }
}
