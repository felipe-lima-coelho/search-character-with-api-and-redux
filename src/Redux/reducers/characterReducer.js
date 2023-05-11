import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions/actionsTypes";

const INITIAL_STATE = {
  name: '',
  born: '',
  titles: [],
  aliases: [],
  tvSeries: [],
  playedBy: [],
  isLoading: false,
  fetched: false,
  errorMessage: '',
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {...state, isLoading: true};
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        ...action.payload[0],
        isLoading: false,
        fetched: true,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  };
};

export default characterReducer;
