import { useState, useEffect } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import FetchMovies from '../../services/movieService';

function App() {
  return (
    <>
      <Toaster />
      <SearchBar onSubmit={query => FetchMovies(query)} />
    </>
  );
}

export default App;
