import { MovieModel } from "./Movie.model";
import { Person } from "./Person.model";
import { TvShow } from "./TV.model";

export type APIResponseDataModel = {
  results: MovieModel[] | TvShow[] | Person[];
  page: number;
  total_pages: number;
  total_results: number;
};
