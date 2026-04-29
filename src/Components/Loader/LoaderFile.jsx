import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading_gray.json";

function LoaderFile() {
  return (
    <div className="loader-container">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
}

export default LoaderFile;
