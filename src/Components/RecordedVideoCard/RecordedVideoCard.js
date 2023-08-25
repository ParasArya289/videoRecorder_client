import { useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
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
          muted
          currentTime="1"
          onMouseOver={handlePlayVideoOnMouseOver}
          onMouseLeave={handlePauseVideoOnMouseOver}
        >
          <source src={URL.createObjectURL(props.vid)} type="video/webm" />
        </video>
        <span>{props.title}</span>
      </div>
      <a href={URL.createObjectURL(props.vid)} download={`${props.title}.webm`}>
        <BsDownload />
      </a>
      <button><RxCrossCircled  style={{backgroundColor:"var(--primary-color)"}}/></button>
    </div>
  );
};
