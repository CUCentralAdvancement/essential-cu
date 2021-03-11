import React from "react";
// import ReactPlayer from "react-player";

export default function VideoPlayer({
  bgVideo,
  autoPlay: _autoPlay = 0,
  videoControls: _videoControls = 1,
}: {
  bgVideo: string;
  autoPlay?: number;
  videoControls?: number;
}) {
  const splitVideoUrl = bgVideo.split("/");
  const bgVideoId = splitVideoUrl[splitVideoUrl.length - 1];
  return (
    <script className="js-story-video-template" type="text/html">
      <iframe
        title="story video"
        className="js-story-video story-video-full"
        style={{ 
          pointerEvents: "auto",
          minHeight: "auto",
          height: "56.25vw"
        }}
        src={
          "https://player.vimeo.com/video/" +
          bgVideoId +
          "?autoplay=0&title=0&controls=1&byline=0&loop=1"
        }
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      {/*
    <ReactPlayer
      className="js-story-video story-video-full"
      style={{pointerEvents: 'auto'}}
      url={`https://player.vimeo.com/video/${bgVideoId}`}
      config={{
          vimeo: {
              playerOptions: {
                  autoplay: autoPlay === 1
              }
          }
      }}
    />
  */}
    </script>
  );
}
