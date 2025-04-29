import { useSelector } from "react-redux";

const MovieDetials = () => {
  const movieDetails = useSelector((store) => store.movies.addMovieDetails);

  const {
    original_title,
    overview,
    poster_path,
    id,
    release_date,
    title,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <div className="w-full  bg-black ">
      <div className="flex flex-col items-center text-white p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-1/3 rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{original_title || title}</h1>
        <p className="text-sm text-gray-400 mb-4">Released: {release_date}</p>
        <p className="text-lg mb-4">{overview}</p>
        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 font-bold">
            Rating: {vote_average}
          </span>
          <span className="text-gray-400">({vote_count} votes)</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetials;
