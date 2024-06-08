// const baseURL = "https://api.themoviedb.org/3/";
const baseURL = "http://localhost:3000/"; //for JSON server
export enum APIEndpoints {
  GuestSession = `${baseURL}authentication/guest_session/new`,
  CountriesList = `${baseURL}configuration/countries?language=en-US`,
  Languages = `${baseURL}configuration/languages`,
  Movies = `${baseURL}discover/movie`,
  TV = `${baseURL}discover/tv`,
  TVOnAir = `${baseURL}tv/on_the_air?language=en-US&page=1`,
  TVPopular = `${baseURL}tv/popular?language=en-US&page=1`,
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
