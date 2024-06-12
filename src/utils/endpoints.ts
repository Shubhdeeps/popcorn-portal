const baseURL = "https://api.themoviedb.org/3/";
// const baseURL = "http://localhost:3000/"; //for JSON server
export enum APIEndpoints {
  BaseURL = baseURL,
  Recommendations = `${baseURL}movie`,
  GuestSession = `${baseURL}authentication/guest_session/new`,
  CountriesList = `${baseURL}configuration/countries?language=en-US`,
  Languages = `${baseURL}configuration/languages`,
  Movies = `${baseURL}discover/movie`,
  TV = `${baseURL}discover/tv`,
  TVOnAir = `${baseURL}tv/on_the_air`,
  TVPopular = `${baseURL}tv/popular`,
  GenreList = `${baseURL}genre/movie/list`,
  NowPlaying = `${baseURL}movie/now_playing`,
  Upcoming = `${baseURL}movie/upcoming`,
  TopRated = `${baseURL}movie/top_rated`,
  Popular = `${baseURL}movie/popular`,
  PeoplePopular = `${baseURL}person/popular`,
  TvCredits = `${baseURL}person`,
  MovieCredits = `${baseURL}person`,
  PersonCredits = `${baseURL}movie`,
  PersonTVCredits = `${baseURL}tv`,
  //Single object
  MediaOverview = baseURL,
  // Search = `${baseURL}search`,
  Search = "https://api.themoviedb.org/3/search",
  Image = `http://image.tmdb.org/t/p/w500`,
  Youtube = `https://www.youtube.com/watch?v=`,
}

export type APIEndpointKeys = keyof typeof APIEndpoints;

// recommendations
// https://api.themoviedb.org/3/movie/{movie_id}/recommendations
// https://api.themoviedb.org/3/movie/{movie_id}/similar
// video https://api.themoviedb.org/3/movie/{movie_id}/videos
