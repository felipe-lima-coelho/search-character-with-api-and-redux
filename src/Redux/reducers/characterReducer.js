const INITIAL_STATE = {
  name: '',
  born: '',
  titles: '',
  aliases: '',
  tvSeries: '',
  playedBy: '',
  isLoading: false,
  fetched: false,
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default characterReducer;
