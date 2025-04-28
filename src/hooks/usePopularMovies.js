import { useDispatch, useSelector } from "react-redux"; // Import useSelector here
import { useEffect } from "react";
import { API_OPTIONS, API_URL_POPULAR } from "../utils/constants";
import { popularMovies } from "../utils/moviesSlice"; // Assuming this is your action

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const popularMoviesData = useSelector((store) => store.movies.popularMovies); // Use useSelector to get the movies from the store

  const getPopularMovies = async () => {
    try {
      const data = await fetch(API_URL_POPULAR, API_OPTIONS);
      const json = await data.json();
      console.log("popular movies", json.results);
      dispatch(popularMovies(json.results)); // Dispatch action to store the movies
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  // Use useEffect to trigger the API call when the component mounts
  useEffect(() => {
    !popularMoviesData && getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs when the component mounts
};

export default useNowPlayingMovies;
