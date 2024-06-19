import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  // Function to fetch random movies on component mount
  useEffect(() => {
    const fetchRandomMovies = async () => {
      const randomSearchTerms = ['Batman', 'Spiderman', 'Avengers']; // Example random search terms
      const randomIndex = Math.floor(Math.random() * randomSearchTerms.length);
      const randomQuery = randomSearchTerms[randomIndex];
      
      const URL = `https://www.omdbapi.com/?s=${randomQuery}&page=1&apikey=bfd6b563`;
      try {
        const res = await axios.get(URL);
        const data = res.data;
        if (data.Response === "True") {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching random movies:', error);
      }
    };

    fetchRandomMovies();
  }, []); // Empty dependency array to run effect only once on mount

  // Function to handle search
  const handleSearch = async () => {
    if (query) {
      const URL = `https://www.omdbapi.com/?s=${query}&page=1&apikey=bfd6b563`;
      try {
        const res = await axios.get(URL);
        const data = res.data;
        if (data.Response === "True") {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

  // Function to display movie details
  const displayMovieDetails = async (movieID) => {
    const res = await axios.get(`https://www.omdbapi.com/?i=${movieID}&apikey=bfd6b563`);
    const movieDetails = res.data;
    alert(JSON.stringify(movieDetails, null, 2));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setQuery={setQuery} handleSearch={handleSearch} />
      <main className="flex-grow">
        <MovieGrid movies={movies} displayMovieDetails={displayMovieDetails} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
