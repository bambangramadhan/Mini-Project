import request from 'superagent';

function loadFailure(){
  return {type: "LOAD_FAILURE"}
}

function loadSuccess(items){
  return {type: "LOAD_SUCCESS", items}
}

export function loadMovie(url){
  return dispatch => {
    return request
    .get(url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(loadFailure())
      }else{
        dispatch(loadSuccess(res.body.results))
      }
    })
  }
}
