import { useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import "./RecordedVideoCard.css";

export const RecordedVideoCard = ({ ...props }) => {
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
        <span>{props.title}</span>
      </div>
      <a
        href={URL.createObjectURL(props.vid)}
        download={`${props.title}.webm`}
        onClick={(e) => e.stopPropagation()}
      >
        <BsDownload />
      </a>
      <button>
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
