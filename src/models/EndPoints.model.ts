import { MovieModel } from "./Movie.model";

export interface BaseResponse {
  results: MovieModel[];
  page: number;
  total_pages: number;
  total_results: number;
}
export interface MoviesUpcoming extends BaseResponse {
  dates: {
    maximum: string; //'2024-08-03'
    minimum: string;
  };
}

export interface MoviesTopRated extends BaseResponse {}
