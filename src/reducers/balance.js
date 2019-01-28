import {BALANCE_FETCH_DATA_SUCCESS} from '../constants/ActionTypes'

export default function balance(state = [], action){
  console.log(JSON.stringify(action.purchasedlist));
  switch (action.type) {

    case BALANCE_FETCH_DATA_SUCCESS:
    return JSON.stringify(action)

    default:
    return state

  }
}
