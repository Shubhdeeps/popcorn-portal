import Spinner from "@/components/Spinner";
import { useFetch } from "@/hooks/useFetch";
import { MoviesUpcoming } from "@/models/EndPoints.model";
import { APIEndpoints } from "@/utils/endpoints";
import UpcomingMovieCard from "../Cards/UpcomingMovieCard";
import Carousel from "@/components/Carousel";
import UpcomingMovieMiniCard from "../Cards/UpcomingMovieMiniCard";

export default function UpcomingMoviesGrid() {
  const response = useFetch<MoviesUpcoming>(APIEndpoints.Upcoming);

  return (
    <>
      <div className="upcoming-movie-grid">
        <div className="upcoming-movie-grid__carousel-wrapper">
          {response.state === "success" && (
            <Carousel>
              {response.payload.results.splice(0, 6).map((movie) => {
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
          )}
          <div className="upcoming-movie-grid__gradient" />
        </div>
        <div className="gradient-wrapper">
          <div className="upcoming-movie-grid__mini-carousel-wrapper">
            {response.state === "success" && (
              <>
                {response.payload.results.map((movie) => {
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
            )}
          </div>
          <div className="horizontal-gradient">
            <a>Browse all</a>
          </div>
        </div>
      </div>
      {/* <div className="col-md-3 border-1"></div> */}
      {/* Error */}
      {response.state === "error" && <div>{response.error}</div>}
      {/* Spinner state */}
      {response.state === "loading" && <Spinner />}
    </>
  );
}
