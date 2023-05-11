import {
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  REQUEST_FAILED,
} from "./actionsTypes";

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (data) => ({
  type: REQUEST_SUCCESSFUL,
  payload: data,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export const fetchCharacterInfo = () => async (dispatch, getState) => {
  dispatch(requestStarted());
  try {
    const name = getState.characterReducer.name;
    const API_URL = `https://anapioficeandfire.com/api/characters?name=${name}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(requestSuccessful(data));
  } catch (error) {
    dispatch(requestFailed(error));
  }
};
