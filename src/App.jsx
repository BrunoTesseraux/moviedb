import "./App.css";
import Header from "./assets/header";
import MovieList from "./assets/movielist";
import React, { useState, useEffect } from "react";
import Movies from "./assets/moviedb";

const App = () => {
  const [movies, setMovies] = useState(Movies);
  const [sortBy, setSortBy] = useState("title.asc");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = () => {
    const sortedMovies = [...Movies]
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.genre.some((genre) =>
            genre.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          movie.year.toString().includes(searchQuery) ||
          movie.director.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "year.desc") {
          return b.year - a.year;
        } else if (sortBy === "year.asc") {
          return a.year - b.year;
        } else if (sortBy === "rate.desc") {
          return b.rate - a.rate;
        } else if (sortBy === "title.asc") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "title.desc") {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });

    setMovies(sortedMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, [sortBy, searchQuery]);

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <div>
      <Header
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
