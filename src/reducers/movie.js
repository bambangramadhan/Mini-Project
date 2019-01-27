export default function movie(state = [], action){
  switch (action.type) {
    case "LOAD_SUCCESS":
    return action.items;

    case "LOAD_FAILURE":
    return state

    default:
    return state

  }
}
