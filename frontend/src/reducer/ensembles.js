import * as actions from '../actions/ensembles-actions';
const initState = null;
export default (state = initState, action)=>{
  const {type, payload} = action;

  switch(type){
    case actions.ENSEMBLE_SET:
      return payload;
    default:
      return state;
  }
}