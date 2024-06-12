import { MovieModel } from "./Movie.model";

export interface Person {
  adult: boolean;
  gender: number; //1 - female;  2-male
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  popularity: number;
  known_for: MovieModel[];
}

export interface PersonOverview {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: null | string;
  deathday: null | string;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  known_for_department: string | null;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}
