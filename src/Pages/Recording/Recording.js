import { useParams } from "react-router-dom";
import { useRecordings } from "../../Context/recordingContext";
import { BsDownload } from "react-icons/bs";
import "./Recording.css";
import { Navbar } from "../../Components/Navbar/Navbar";

export const Recording = () => {
  const { recordingId } = useParams();

  const {
    recordings: { recordings },
  } = useRecordings();

  const foundRecording = recordings.find(({ id }) => id == recordingId);

  return (
    <>
      <Navbar />
      <div className="recording">
        <video controls>
          <source
            src={URL.createObjectURL(foundRecording.vid)}
            type="video/webm"
          />
        </video>
        <div>
          <div>
            <span>{foundRecording.title}</span>
            <span>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(foundRecording.date)}
            </span>
          </div>
          <a
            href={URL.createObjectURL(foundRecording.vid)}
            download={`${foundRecording.title}.webm`}
            onClick={(e) => e.stopPropagation()}
          >
            <BsDownload />
          </a>
        </div>
      </div>
    </>
  );
};
