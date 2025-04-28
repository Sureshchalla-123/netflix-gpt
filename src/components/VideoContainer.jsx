import { useEffect } from "react";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const trailerMovie = useSelector((store) => store.movies.trailerMovie);

  useEffect(() => {});

  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10  ">
      <iframe
        className="w-full h-screen object"
        src={`https://www.youtube.com/embed/${trailerMovie}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerMovie}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
    </div>
  );
};

export default VideoContainer;
