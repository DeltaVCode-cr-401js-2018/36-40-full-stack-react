import superagent from 'superagent';
export const TOKEN_SET = 'TOKEN_SET';
export const TOKEN_DELETE = 'TOKEN_DELETE';
const API_URI = 'http://localhost:5000';
export const tokenSet = token =>({
  type: TOKEN_SET,
  payload: token,
});

export const tokenDelete = token =>({
  type: TOKEN_DELETE,
  payload: token,
});

export const signUpReq = user => dispatch => {
  superagent.post(`${API_URI}/signup`)
    .send(user)
    .then(res =>{
      dispatch(tokenSet(res.body.token));
      return res;
    });
}

export const signInReq = user => dispatch =>{
  superagent.get(`${API_URI}/signin`)
    .auth(user.username, user.password)
    .then(res =>{
      dispatch(tokenSet(res.body.token));
      return res;
    });
}