import { useDispatch, useSelector } from "react-redux"; // Import useSelector here
import { useEffect } from "react";
import { API_OPTIONS, API_URL_UPCOMING } from "../utils/constants";
import { upComingMovies } from "../utils/moviesSlice"; // Assuming this is your action

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const upComingMoviesData = useSelector(
    (store) => store.movies.upComingMovies
  ); // Use useSelector to get the movies from the store

  const getUpComingMovies = async () => {
    try {
      const data = await fetch(API_URL_UPCOMING, API_OPTIONS);
      const json = await data.json();

      dispatch(upComingMovies(json.results)); // Dispatch action to store the movies
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  // Use useEffect to trigger the API call when the component mounts
  useEffect(() => {
    !upComingMoviesData && getUpComingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs when the component mounts
};

export default useUpComingMovies;
