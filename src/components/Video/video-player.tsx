type IVideoPlayerProps = {
  videoKey: string;
  videoSite: string;
};

const VideoEmbeddedLink = "https://www.youtube.com/embed/";
export default function VideoPlayer({
  videoKey,
  videoSite,
}: IVideoPlayerProps) {
  if (videoSite !== "YouTube") {
    return <></>;
  }
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="100%"
        src={VideoEmbeddedLink + videoKey}
        title="YouTube video player"
        frameBorder="0"
        autoFocus
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
