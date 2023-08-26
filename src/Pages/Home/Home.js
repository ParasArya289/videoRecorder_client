import { RecordedVideoCard } from "../../Components/RecordedVideoCard/RecordedVideoCard";
import { VideoRecorder } from "../../Components/VideoRecorder/VideoRecorder";
import { useRecordings } from "../../Context/recordingContext";
import "./Home.css";

export const Home = () => {
  const {
    recordings: { recordings },
  } = useRecordings();
  return (
    <div>
      <VideoRecorder />
      <h4>Your Recordings</h4>
      {recordings.length <= 0 && <p>No Saved Recordings Yet!</p>}
      <div className="recorded-videos">
        {recordings.map((props) => (
          <RecordedVideoCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
};
