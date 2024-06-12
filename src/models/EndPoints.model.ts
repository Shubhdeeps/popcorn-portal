import { MovieModel, MovieOverviewModel } from "./Movie.model";
import { Person, PersonOverview } from "./Person.model";
import { TVShowOverview, TvShow } from "./TV.model";

export type APIResponseDataModel = {
  results: MovieModel[] | TvShow[] | Person[];
  page: number;
  total_pages: number;
  total_results: number;
};

type MovieOverview = MovieOverviewModel & {
  type: "movie";
};

type TvOverview = TVShowOverview & {
  type: "tv";
};

type POverview = PersonOverview & {
  type: "person";
};
export type APIResponseOverviewModel = MovieOverview | TvOverview | POverview;
