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
  {
    /* {recordedChunks.length > 0 && ( <div className="download"> <a href={URL.createObjectURL( new Blob(recordedChunks, { type: "video/webm", }) )} download="recorded-video.webm" > Download Recorded Video </a> <video controls> <source src={URL.createObjectURL( new Blob(recordedChunks, { mimeType: "video/webm;codecs=vp9,opus", }) )} type="video/webm" /> Your browser does not support the video tag. </video> </div> )} */
  }

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
      <a href={URL.createObjectURL(props.vid)} download={`${props.title}.webm`}>
        <BsDownload />
      </a>
      {/* <button></button> */}
    </div>
  );
};
