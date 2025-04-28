import { useDispatch, useSelector } from "react-redux";
import { API_KEY, API_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = ({ id }) => {
  const dispatch = useDispatch();

  const trailerMovie = useSelector((store) => store.movies.trailerMovie);

  const getVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      const filteredData = json.results.filter(
        (item) => item.type === "Trailer" && item.site === "YouTube"
      );
      const trailerMovie = filteredData[1]?.key;
      dispatch(addTrailerMovie(trailerMovie));
    } catch (error) {
      console.log("Error while getting trailer video" + error);
    }
  };

  useEffect(() => {
    !trailerMovie && getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};

export default useTrailerVideo;
