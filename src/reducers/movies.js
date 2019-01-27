import {MOVIES_SUCCESS, MOVIES_FAILURE} from '../constants/ActionTypes'

export default function movies(state = [], action){
  switch (action.type) {
    case MOVIES_SUCCESS:
    return action.movies.results

    case MOVIES_FAILURE:
    return state

    default:
    return state

  }
}
