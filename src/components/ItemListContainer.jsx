import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  return (
    <div className="absolute -mt-34">
      <ItemList title="Now Playing Movies" data={nowPlayingMovies} />
      <ItemList title="Popular Movies" data={popularMovies} />
      <ItemList title="Top Rated Movies" data={topRatedMovies} />
      <ItemList title="UpComing Movies" data={upComingMovies} />
    </div>
  );
};

export default ItemListContainer;
