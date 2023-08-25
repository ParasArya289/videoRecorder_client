import { useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import "./RecordedVideoCard.css";

export const RecordedVideoCard = ({ ...props }) => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.5;
    }
  }, [videoRef]);

  console.log(props.title);
  const handlePlayVideoOnMouseOver = () => {
    videoRef.current.play();
  };
  const handlePauseVideoOnMouseOver = () => {
    videoRef.current.pause();
  };

  return (
    <div className="videoCard">
      <div>
        <video
          ref={videoRef}
          // controls
          currentTime="1"
          onMouseOver={handlePlayVideoOnMouseOver}
          onMouseLeave={handlePauseVideoOnMouseOver}
        >
          <source src={URL.createObjectURL(props.vid)} type="video/webm" />
        </video>
        <span>{props.title}</span>
      </div>
      <button>
        <BsDownload />
      </button>
    </div>
  );
};
