import { useDispatch, useSelector } from "react-redux"; // Import useSelector here
import { useEffect } from "react";
import { API_OPTIONS, API_URL_TOPRATED } from "../utils/constants";
import { topRatedMovies } from "../utils/moviesSlice"; // Assuming this is your action

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const topRatedMoviesData = useSelector(
    (store) => store.movies.topRatedMovies
  ); // Use useSelector to get the movies from the store

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(API_URL_TOPRATED, API_OPTIONS);
      const json = await data.json();

      dispatch(topRatedMovies(json.results)); // Dispatch action to store the movies
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  // Use useEffect to trigger the API call when the component mounts
  useEffect(() => {
    !topRatedMoviesData && getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs when the component mounts
};

export default useNowPlayingMovies;
