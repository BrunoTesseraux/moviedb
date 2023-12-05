const MovieCard = ({ movie }) => {
  const { title, year, director, duration, genre, rate } = movie;

  return (
    <div className="movie-card">
      <div className="movie-details">
        <h2>{title}</h2>
        <h2>{year}</h2>
        <h2>{director}</h2>
        <h2>{duration}</h2>
        <h2>{rate}</h2>
        <p>{genre.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
