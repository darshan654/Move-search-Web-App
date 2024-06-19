import React from 'react';

const MovieGrid = ({ movies, displayMovieDetails }) => {
  const openGoogleSearch = (movieTitle) => {
    const searchQuery = encodeURIComponent(movieTitle);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 text-white p-4 rounded cursor-pointer transition transform hover:scale-105"
            onClick={() => openGoogleSearch(movie.Title)}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "image_not_found.jpg"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-bold">{movie.Title}</h3>
            <p className="text-sm opacity-75">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
