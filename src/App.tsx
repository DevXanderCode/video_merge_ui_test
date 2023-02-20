import { useRef } from "react";
import "./App.css";
import callIcon from "./assets/call.png";
import manImg from "./assets/man.jpg";
import femaleImg from "./assets/female.jpg";
import disconnectImg from "./assets/disconnected.png";
import foregroundVideo from "./assets/foreground.mp4";
import backgroundVideo from "./assets/background.mp4";

function App() {
  // Get the video elements and the canvas
  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const handleDownloadClick = async () => {
    console.log("function called");
    // Get the canvas context and draw the videos onto the canvas
    const ctx = canvas.current?.getContext("2d");

    if (ctx && video1.current && video2.current && canvas.current) {
      ctx.drawImage(
        video1.current,
        0,
        0,
        canvas.current.width / 2,
        canvas.current.height
      );
      ctx.drawImage(
        video2.current,
        canvas.current.width / 2,
        0,
        canvas.current.width / 2,
        canvas.current.height
      );

      // Create a new video element with the canvas as the source
      const newVideo = document.createElement("video");
      newVideo.src = canvas.current.toDataURL("video/mp4");

      // Add a download button to download the new video
      const a = document.createElement("a");
      a.href = newVideo.src;
      a.download = "combined-video.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="bg-white w-screen h-screen items-center justify-center flex">
      <div className="flex relative  bg-slate-500  h-4/6 w-1/3 rounded-3xl">
        <div className="flex-1 w-1/3 h-full">
          <video
            id="video1"
            ref={video1}
            height="100%"
            width="100%"
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            // loop
            muted
            preload="auto"
            poster={manImg}
            // crossOrigin="anonymous"
          >
            <source
              src={foregroundVideo}
              // src={
              //   "https://user-images.githubusercontent.com/18400051/220107713-53ae19b0-8065-4a6f-8752-b12780383ce1.mp4"
              // }
              type="video/mp4"
            />
            Your browser does not support this video format.
          </video>
        </div>

        <div className="absolute top-4 right-4 border rounded-3xl">
          <div className="w-36">
            <video
              id="video2"
              ref={video2}
              className="h-52 rounded-3xl w-36"
              autoPlay
              // loop
              muted
              preload="auto"
              poster={femaleImg}
              // crossOrigin="anonymous"
            >
              <source
                src={backgroundVideo}
                // src={
                //   "https://user-images.githubusercontent.com/18400051/220107983-60bc38bb-122d-424a-9019-372a76af09c7.mp4"
                // }
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="absolute bottom-10 right-0 left-0">
          <div className="flex items-center justify-center flex-wrap">
            <div
              className="rounded-full bg-purple-600 flex items-center justify-center w-12 h-12 mr-5 cursor-pointer"
              onClick={() => {
                // do some thing
              }}
            >
              <img src={callIcon} className="w-6" />
            </div>
            <div
              role={"button"}
              id="download-btn"
              className="rounded-full bg-red-600 flex items-center justify-center w-12 h-12 cursor-pointer"
              onClick={handleDownloadClick}
            >
              <img src={callIcon} className="w-6" />
              {/* <img src={disconnectImg} className="w-6" /> */}
            </div>
          </div>
        </div>
        <canvas ref={canvas} className="h-4/6 w-1/3 rounded-3xl hidden" />
      </div>
    </div>
  );
}

export default App;
