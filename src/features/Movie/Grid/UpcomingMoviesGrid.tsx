import UpcomingMovieCard from "../Cards/UpcomingMovieCard";
import Carousel from "@/components/Carousel";
import UpcomingMovieMiniCard from "../Cards/UpcomingMovieMiniCard";
import { useFetch } from "@/hooks/useFetch1";
import Spinner from "@/components/Spinner";
import { MovieModel } from "@/models/Movie.model";

export default function UpcomingMoviesGrid() {
  const { error, loading, results } = useFetch<MovieModel>("Upcoming");

  const dataArray = [...results];

  return (
    <>
      <div className="upcoming-movie-grid">
        <div className="upcoming-movie-grid__carousel-wrapper">
          {/* {response.state === "success" && ( */}
          <Carousel animated>
            {dataArray.splice(0, 6).map((movie) => {
              return (
                <UpcomingMovieCard
                  key={movie.id}
                  backdrop_path={movie.backdrop_path}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                  title={movie.title}
                  vote_average={movie.vote_average}
                />
              );
            })}
          </Carousel>
          {/* )} */}
          <div className="upcoming-movie-grid__gradient" />
        </div>
        <div className="gradient-wrapper">
          <div className="upcoming-movie-grid__mini-carousel-wrapper">
            {/* {response.state === "success" && ( */}
            <>
              {dataArray.map((movie) => {
                return (
                  <UpcomingMovieMiniCard
                    id={movie.id}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    key={movie.id}
                  />
                );
              })}
            </>
          </div>
          <div className="horizontal-gradient">
            <a>Browse all</a>
          </div>
        </div>
      </div>
      {/* <div className="col-md-3 border-1"></div> */}
      {/* Error */}
      {Boolean(error) && <div>{error}</div>}
      {/* Spinner state */}
      {loading && <Spinner />}
    </>
  );
}
