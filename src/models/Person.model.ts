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
