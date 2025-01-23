import { Player } from "@lottiefiles/react-lottie-player";
import loading from "@asset/lottie/loading.json";
import { layout } from "./Loading.css";

const Loading = () => {
  return (
    <div className={layout}>
      <Player autoplay loop src={loading} style={{ width: 127, height: 129 }} />
    </div>
  );
};

export default Loading;
