import { MovieModel, MovieOverviewModel } from "./Movie.model";
import { Person } from "./Person.model";
import { TvShow } from "./TV.model";

export type APIResponseDataModel = {
  results: MovieModel[] | TvShow[] | Person[];
  page: number;
  total_pages: number;
  total_results: number;
};

type MovieOverview = MovieOverviewModel & {
  type: "movie";
};

type TvOverview = TvShow & {
  type: "tv";
};

type PersonOverview = Person & {
  type: "person";
};
export type APIResponseOverviewModel =
  | MovieOverview
  | TvOverview
  | PersonOverview;
