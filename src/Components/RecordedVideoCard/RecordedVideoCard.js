export const RecordedVideoCard = ({ blob, index }) => {
    console.log(index)
  return (
    <video key={index} controls>
      <source key={index} src={URL.createObjectURL(blob)} type="video/webm" />
    </video>
  );
};
