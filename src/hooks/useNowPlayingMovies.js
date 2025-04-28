import { useEffect } from "react";

import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(nowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
