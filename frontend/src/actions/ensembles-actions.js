import superagent from 'superagent';
const API_URL = 'http://localhost:5000';
export const ENSEMBLE_SET = 'ENSEMBLE_SET';
export const ensembleSet = (ensembles) =>({
  type: ENSEMBLE_SET,
  payload: ensembles,
});

export const ensembleFetch = () =>
  dispatch =>
    superagent.get(`${API_URL}/api/v1/ensembles`)
      .then(res =>{
        dispatch(ensembleSet(res.body));
        return res;
      });
