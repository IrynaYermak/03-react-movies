import type { Movie } from '../types/movie';
import axios from 'axios';
// import { useState } from 'react';

interface MovieServiceResponse {
  results: Movie[];
}

const token = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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
    .get<MovieServiceResponse>('', options)
    .then(res => res.data);
  console.log(response);

  return response;
}
