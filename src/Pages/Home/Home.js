import { Navbar } from "../../Components/Navbar/Navbar";
import { RecordedVideoCard } from "../../Components/RecordedVideoCard/RecordedVideoCard";
import { VideoRecorder } from "../../Components/VideoRecorder/VideoRecorder";
import { useRecordings } from "../../Context/recordingContext";

export const Home = () => {
  const {
    recordings: { recordings },
  } = useRecordings();
  return (
    <div>
      <Navbar />
      Home
      <VideoRecorder />
      <div className="recorded-videos">
        {recordings.map((blob, index) => (
          <RecordedVideoCard key={index} blob={blob} index={index}/>
        ))}
      </div>
    </div>
  );
};
