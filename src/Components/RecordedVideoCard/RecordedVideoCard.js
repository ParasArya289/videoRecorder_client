import { useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useRecordings } from "../../Context/recordingContext";
import "./RecordedVideoCard.css";

export const RecordedVideoCard = ({ ...props }) => {
  const { dispatchRecording } = useRecordings();
  const videoRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.5;
    }
  }, [videoRef]);

  const handlePlayVideoOnMouseOver = () => {
    videoRef.current.play();
  };
  const handlePauseVideoOnMouseOver = () => {
    videoRef.current.pause();
  };

  const deleteRecordingHandler = (e) => {
    e.stopPropagation();
    dispatchRecording({ type: "DELETE_RECORDING", payload: { id: props.id } });
  };

  return (
    <div
      className="videoCard"
      onClick={() => navigate("/recording/" + props.id)}
    >
      <div>
        <video
          ref={videoRef}
          muted
          onMouseOver={handlePlayVideoOnMouseOver}
          onMouseLeave={handlePauseVideoOnMouseOver}
        >
          <source src={URL.createObjectURL(props.vid)} type="video/webm" />
        </video>
        <div>
          <span>{props.title}</span>
          <br />
          <span>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(props.date)}
          </span>
        </div>
      </div>
      <a
        href={URL.createObjectURL(props.vid)}
        download={`${props.title}.webm`}
        onClick={(e) => e.stopPropagation()}
      >
        <BsDownload />
      </a>
      <button onClick={deleteRecordingHandler}>
        <RxCrossCircled
          style={{
            backgroundColor: "var(--primary-color)",
            borderRadius: "50%",
          }}
        />
      </button>
    </div>
  );
};
