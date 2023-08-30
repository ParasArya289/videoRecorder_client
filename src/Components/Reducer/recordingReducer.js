export const initState = {
  recordings: [],
};

export const recordingReducer = (state, action) => {
  switch (action.type) {
    case "INIT_RECORDINGS":
      return {
        ...state,
        recordings: action.payload,
      };
    case "ADD_RECORDING":
      return {
        ...state,
        recordings: [action.payload, ...state.recordings],
      };
    
    default:
      return state;
  }
};
