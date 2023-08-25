import React, { useEffect, useRef, useState } from "react";
import { BsCameraVideoOff, BsCameraVideo } from "react-icons/bs";
import { useRecordings } from "../../Context/recordingContext";
import "./VideoRecorder.css";

const constraints = { video: { width: { max: 320 } }, audio: true };

export const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isPermission, setIsPermission] = useState(true);

  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);

  const {
    recordings: { recordings },
    dispatchRecording,
  } = useRecordings();

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setIsPermission(true);
      setIsRecording(true);
      let video = videoRef.current;
      video.srcObject = stream;
      video?.play();

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorderRef.current.start();
    } catch (err) {
      console.log(err);
      setIsPermission(false);
    }
  };

  const toggleRecording = () => {
    if (!isRecording) {
      startVideo();
      videoRef.current.play();
    } else {
      if (
        mediaRecorderRef.current ||
        mediaRecorderRef.current.state === "recording"
      ) {
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.stream.getTracks().forEach((track) => {
          track?.stop();
        });
      }
      setIsRecording(false);
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
    if (!isRecording && recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, {
        mimeType: "video/webm;codecs=vp9,opus",
      });
      dispatchRecording({
        type: "ADD_RECORDING",
        payload: {
          id: recordings.length,
          vid: blob,
        },
      });

      setRecordedChunks(() => []);
    }
  }, [isRecording, recordedChunks]);

  return (
    <div className="videoRecorder">
      <video ref={videoRef} />
      <div className="controls" data-state={isRecording}>
        <button onClick={toggleRecording}>
          {isRecording ? <BsCameraVideoOff /> : <BsCameraVideo />}
        </button>
        {!isPermission && <p>Grant access to camera</p>}
      </div>
    </div>
  );
};
