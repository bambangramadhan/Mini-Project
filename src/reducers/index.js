import {combineReducers} from 'redux'
import movies from './movies'
import movie from './movie'
import casts from './casts'
import related from './related'
import recommended from './recommended'
import trailers from './trailer'

const rootReducer = combineReducers({
  casts, movies, movie, trailers, related, recommended
})

export default rootReducer
