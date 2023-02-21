import { useRef, useEffect, useState } from "react";
import "./App.css";
import callIcon from "./assets/call.png";
import manImg from "./assets/man.jpg";
import femaleImg from "./assets/female.jpg";
import disconnectImg from "./assets/disconnected.png";
import foregroundVideo from "./assets/foreground.mp4";
import backgroundVideo from "./assets/background.mp4";

function App() {
  const [recording, setRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const downloadButton = useRef<HTMLAnchorElement>(null);
  let data: BlobPart[] | undefined = [];

  const startRecording = () => {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: false,
      })
      .then((e) => {
        let combine = new MediaStream([...e.getTracks()]);
        let recorder = new MediaRecorder(combine);
        alert("recording started");
        recorder.start();
        data = [];

        recorder.ondataavailable = (e) => {
          data!.push(e.data);
        };

        recorder.onstop = () => {
          /* Convert the recorded audio to 
             blob type mp4 media */
          let blobData = new Blob(data, { type: "video/mp4" });

          // Convert the blob data to a url
          let url = URL.createObjectURL(blobData);

          // Assign the url to the output video tag and anchor
          const downloadLink = document.createElement("a");
          downloadLink.href = url;
          downloadLink.download = "my-screen-recording.mp4";
          downloadLink.click();
        };
        setTimeout(() => {
          alert("recording stopoed");
          recorder.stop();
        }, 7000);
      });
  };

  // const startRecording = () => {
  //   alert("recording started");
  //   const canvas = document.createElement("canvas");
  //   const div = document.getElementById("my-div")!;
  //   canvas.width = div.offsetWidth;
  //   canvas.height = div.offsetHeight;
  //   const context = canvas.getContext("2d");

  //   if (context) {
  //     const mediaStream = canvas.captureStream();
  //     console.log("media stream", mediaStream);
  //     const mediaRecorder = new MediaRecorder(mediaStream);
  //     const chunks: BlobPart[] | undefined = [];

  //     mediaRecorder.ondataavailable = (event) => {
  //       console.log("event data", event.data);
  //       chunks.push(event.data);
  //     };

  //     mediaRecorder.onstop = () => {
  //       alert("recording stopped");
  //       const videoBlob = new Blob(chunks, { type: "video/mp4" });
  //       const videoURL = URL.createObjectURL(videoBlob);
  //       // videoRef.current!.src = videoURL;

  //       // Download video after a delay of 10 seconds

  //       // const downloadLink = document.createElement("a");
  //       // downloadLink.href = videoURL;
  //       // downloadLink.download = "my-screen-recording.mp4";
  //       // downloadLink.click();
  //     };

  //     mediaRecorder.start();
  //     setTimeout(() => {
  //       mediaRecorder.stop();
  //     }, 5000); // Record for 5 seconds
  //   }
  // };

  // const drawCanvas = () => {
  //   const canvas = canvasRef.current!;
  //   const video = videoRef.current!;
  //   const context = canvas.getContext("2d")!;
  //   context.drawImage(video, 0, 0, canvas.width, canvas.height);
  // };

  return (
    <div className="bg-white w-screen h-screen items-center justify-center flex">
      <div
        className="flex relative  bg-slate-500  h-4/6 lg:w-1/3 md:w-full rounded-3xl"
        id="my-div"
      >
        <div className="flex-1 lg:w-1/3 md:w-full  h-full">
          <video
            id="video1"
            // ref={video1}
            // ref={backgroundVideoRef}
            ref={videoRef}
            height="100%"
            width="100%"
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            // loop
            muted
            preload="auto"
            poster={manImg}
            src={foregroundVideo}
            crossOrigin="anonymous"
          >
            Your browser does not support this video format.
          </video>
        </div>
        <div className="absolute top-4 right-4 border rounded-3xl">
          <div className="w-36">
            <video
              id="video2"
              // ref={video2}'
              // ref={foregroundVideoRef}
              className="h-52 rounded-3xl w-36"
              autoPlay
              // loop
              muted
              preload="auto"
              poster={femaleImg}
              src={backgroundVideo}
              typeof="video/mp4"
              crossOrigin="anonymous"
            >
              Your browser does not support this video format.
            </video>
          </div>
        </div>
        <div className="absolute bottom-10 right-0 left-0">
          <div className="flex items-center justify-center flex-wrap">
            <div
              className="rounded-full bg-purple-600 flex items-center justify-center w-12 h-12 mr-5 cursor-pointer"
              // onClick={startRecording}
            >
              <img src={callIcon} className="w-6" />
            </div>
            <div
              role={"button"}
              id="download-btn"
              className="rounded-full bg-red-600 flex items-center justify-center w-12 h-12 cursor-pointer"
              onClick={startRecording}
            >
              <img src={callIcon} className="w-6" />
              {/* <img src={disconnectImg} className="w-6" /> */}
            </div>
          </div>
        </div>
        <canvas ref={canvasRef} className="h-4/6 w-1/3 rounded-3xl hidden" />
        <a
          href="#"
          ref={downloadButton}
          style={{ display: "none" }}
          // download="merged-video.webm"
        >
          Download merged video
        </a>
      </div>
    </div>
  );
}

export default App;

function async(
  arg0: (e: any) => void
):
  | ((value: MediaStream) => MediaStream | PromiseLike<MediaStream>)
  | null
  | undefined {
  throw new Error("Function not implemented.");
}
// notes: ===>  Check out using Iframe
//==> check from recording
