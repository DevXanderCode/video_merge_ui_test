import { useState } from "react";
import "./App.css";
import callIcon from "./assets/call.png";
import manImg from "./assets/man.jpg";
import femaleImg from "./assets/female.jpg";
import disconnectImg from "./assets/disconnected.png";

function App() {
  return (
    <div className="bg-white w-screen h-screen items-center justify-center flex">
      <div className="flex relative  bg-slate-500  h-4/6 w-1/3 rounded-3xl">
        <div className="flex-1 w-1/3 h-full">
          <video
            height="100%"
            width="100%"
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            loop
            muted
            preload="auto"
            poster={manImg}
          >
            <source
              src={
                // "https://vod-progressive.akamaized.net/exp=1676915293~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2527%2F22%2F562635651%2F2660425685.mp4~hmac=bad665aaaedc0c6dd245ceeb9e84ab3e38f911228abd831816a0ba45b7ff29eb/vimeo-prod-skyfire-std-us/01/2527/22/562635651/2660425685.mp4"
                "https://user-images.githubusercontent.com/18400051/220107713-53ae19b0-8065-4a6f-8752-b12780383ce1.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support this video format.
          </video>
        </div>

        <div className="absolute top-4 right-4 border rounded-3xl">
          <div className="w-36">
            <video
              className="h-52 rounded-3xl w-36"
              autoPlay
              loop
              muted
              preload="auto"
              poster={femaleImg}
            >
              <source
                src={
                  "https://user-images.githubusercontent.com/18400051/220107983-60bc38bb-122d-424a-9019-372a76af09c7.mp4"
                  // "https://vod-progressive.akamaized.net/exp=1676915293~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2527%2F22%2F562635651%2F2660425685.mp4~hmac=bad665aaaedc0c6dd245ceeb9e84ab3e38f911228abd831816a0ba45b7ff29eb/vimeo-prod-skyfire-std-us/01/2527/22/562635651/2660425685.mp4"
                }
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
              className="rounded-full bg-red-600 flex items-center justify-center w-12 h-12 cursor-pointer"
              onClick={() => {
                // do something
              }}
            >
              <img src={disconnectImg} className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
