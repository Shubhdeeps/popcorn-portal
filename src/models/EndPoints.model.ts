import { MovieModel } from "./Movie.model";

export interface MoviesUpcoming {
  results: MovieModel[];
  dates: {
    maximum: string; //'2024-08-03'
    minimum: string;
  };
  page: number;
  total_pages: number;
  total_results: number;
}
