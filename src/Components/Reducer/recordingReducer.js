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

    case "DELETE_RECORDING":
      return {
        ...state,
        recordings: state.recordings.filter(
          ({ id }) => id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
