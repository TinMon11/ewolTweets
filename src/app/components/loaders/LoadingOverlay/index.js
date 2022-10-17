import BounceLoader from "react-spinners/ClipLoader"

const LoadingOverlay = ({ visible = false }) => {
  if (!visible) return;
  return (
    <BounceLoader color="#4021b9" />
  );
};

export default LoadingOverlay;