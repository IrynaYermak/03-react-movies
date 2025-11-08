import type { Movie } from '../types/movie';
import axios from 'axios';
// import { useState } from 'react';

interface MovieServiceResponse {
  results: Movie[];
}

const token = import.meta.env.VITE_TMDB_API_KEY;
const url = 'https://api.themoviedb.org/3/search/movie';

export default async function FetchMovies(
  query: string
): Promise<MovieServiceResponse> {
  const options = {
    params: {
      query: query,
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios
    .get<MovieServiceResponse>(url, options)
    .then(res => res.data);
  return response;
}
