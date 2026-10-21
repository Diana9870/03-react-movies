import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie, MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

const token = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        language: "uk-UA",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.results;
}
