import React from "react";
import TitleContainer from "./TitleContainer";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  // Ensure the hook is called unconditionally
  const mainMovie = movies ? movies[0] || null : null;

  const { id } = mainMovie || {};

  // Getting youtube id of trailer video and updated in the store using custom hook
  useTrailerVideo({ id });
  if (!movies) return;

  const { original_title, overview } = mainMovie;

  return (
    <div className=" ">
      <TitleContainer title={original_title} discription={overview} />
      <VideoContainer id={id} />
    </div>
  );
};

export default MainContainer;
