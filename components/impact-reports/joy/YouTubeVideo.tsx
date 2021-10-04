interface YouTubeVideoProps {
  video_id: string,
  title: string,
}

export default function YouTubeVideo({video_id, title}: YouTubeVideoProps) {
  return (
    <div className={"aspect-w-16 aspect-h-9 shadow-xl w-full"}>
      <iframe src={`https://www.youtube.com/embed/${video_id}`}
              title={title}
              width={"100%"}
              height={"100%"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </div>
  );
}
