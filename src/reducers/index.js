import {combineReducers} from 'redux'
import movies from './movies'
import movie from './movie'
import casts from './casts'
import balance from './balance'
import related from './related'
import recommended from './recommended'
import trailers from './trailer'

const rootReducer = combineReducers({
  casts, movies, movie, trailers, related, recommended, balance
})

export default rootReducer
