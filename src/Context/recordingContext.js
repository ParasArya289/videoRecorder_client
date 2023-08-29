import { createContext, useContext, useReducer, useState } from "react";
import {
  initState,
  recordingReducer,
} from "../Components/Reducer/recordingReducer";

export const recordingsContext = createContext();

export const RecordingContextProvider = ({ children }) => {
  const [recordings, dispatchRecording] = useReducer(
    recordingReducer,
    initState
  );

//store video to local storage for specific user
  return (
    <recordingsContext.Provider value={{ recordings, dispatchRecording }}>
      {children}
    </recordingsContext.Provider>
  );
};

export const useRecordings = () => useContext(recordingsContext);
