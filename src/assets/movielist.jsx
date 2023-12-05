import MovieCard from "./moviecard";

const MovieList = ({ movies, index }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
