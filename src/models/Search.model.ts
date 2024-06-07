interface Movie {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie";
  title: string;
  original_language: string;
  genre_ids: number[];
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Person {
  media_type: "person";
  original_name: string;
  name: string;
  gender: number; //1 - female;  2-male
  known_for_department: string;
  profile_path: string;
  known_for: Movie[];
}

interface TvShow {
  backdrop_path: string | null;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: "tv";
  name: string;
  original_language: string;
  genre_ids: number[];
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export type SearchModel = (Person | Movie | TvShow) & {
  id: number;
  adult: boolean;
  popularity: number;
};
