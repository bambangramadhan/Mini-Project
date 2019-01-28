import {combineReducers} from 'redux'
import movies from './movies'
import popular from './popular'
import movie from './movie'
import casts from './casts'
import balance from './balance'
import related from './related'
import loading from './loading'
import recommended from './recommended'
import trailers from './trailer'

const rootReducer = combineReducers({
  casts, movies, movie, trailers, related, recommended, balance, popular, loading
})

export default rootReducer
