const baseURL = "https://api.themoviedb.org/3/";
export enum APIEndpoints {
  GuestSession = `${baseURL}authentication/guest_session/new`,
  CountriesList = `${baseURL}configuration/countries?language=en-US`,
  Languages = `${baseURL}configuration/languages`,
  Movies = `${baseURL}discover/movie`,
  TV = `${baseURL}discover/tv`,
  GenreList = `${baseURL}genre/movie/list`,
  NowPlaying = `${baseURL}movie/now_playing`,
  Upcoming = `${baseURL}movie/upcoming`,
  TopRated = `${baseURL}movie/top_rated`,
  Popular = `${baseURL}movie/popular`,
  PeoplePopular = `${baseURL}person/popular`,
  Search = `${baseURL}search/multi?query=`,
}

// recommendations
// https://api.themoviedb.org/3/movie/{movie_id}/recommendations
// https://api.themoviedb.org/3/movie/{movie_id}/similar
// video https://api.themoviedb.org/3/movie/{movie_id}/videos
