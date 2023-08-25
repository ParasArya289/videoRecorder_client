export const RecordedVideoCard = ({ ...props }) => {
  return (
    <video controls>
      <source src={URL.createObjectURL(props.vid)} type="video/webm" />
    </video>
  );
};
