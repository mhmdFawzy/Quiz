import { SET_USER_NAME, SET_SCORE } from "./../types";

export const setUser = (dataToSubmit) => async (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: dataToSubmit,
  });
};
export const setScore = (score) => async (dispatch) => {
  dispatch({
    type: SET_SCORE,
    payload: score,
  });
};
