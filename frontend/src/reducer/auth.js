import * as actions from '../actions/auth-actions';
export default (state = false, action) => {
  const {type, payload} = action;
  switch(type){
    case actions.TOKEN_SET:
      return payload;
    case actions.TOKEN_DELETE:
      return null;
    default:
      return state;
  }
}