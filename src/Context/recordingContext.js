import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  initState,
  recordingReducer,
} from "../Components/Reducer/recordingReducer";
import { useAuth } from "./authContext";

export const recordingsContext = createContext();

export const RecordingContextProvider = ({ children }) => {
  const [recordings, dispatchRecording] = useReducer(
    recordingReducer,
    initState
  );

  const { user, setUser } = useAuth();

  // store video to local storage for specific user
  // useEffect(() => {
  //   if (recordings !== initState) {
  //     localStorage.setItem(
  //       "user",
  //       JSON.stringify({ ...user, recordings: recordings.recordings })
  //     );
  //     setUser({ ...user, recordings });
  //   }
  // }, [recordings]);

  // useEffect(() => {
  //   const getUserRecordings = JSON.parse(
  //     localStorage.getItem("user")
  //   )?.recordings;
  //   console.log(getUserRecordings);
  //   if (getUserRecordings) {
  //     dispatchRecording({
  //       type: "INIT_RECORDINGS",
  //       payload: getUserRecordings,
  //     });
  //   }
  // }, []);

  return (
    <recordingsContext.Provider value={{ recordings, dispatchRecording }}>
      {children}
    </recordingsContext.Provider>
  );
};

export const useRecordings = () => useContext(recordingsContext);
