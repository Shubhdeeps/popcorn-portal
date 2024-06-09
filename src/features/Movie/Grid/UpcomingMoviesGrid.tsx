import Spinner from "@/components/Spinner";
import { useFetch } from "@/hooks/useFetch";
import { MoviesUpcoming } from "@/models/EndPoints.model";
import { APIEndpoints } from "@/utils/endpoints";
import UpcomingMovieCard from "../Cards/UpcomingMovieCard";
import Carousel from "@/components/Carousel";

export default function UpcomingMoviesGrid() {
  const response = useFetch<MoviesUpcoming>(APIEndpoints.Upcoming);
  console.log({ response });

  return (
    <div className="upcoming-movie-grid d-flex">
      <div className="col-sm-12 col-md-8">
        {response.state === "success" && (
          <Carousel>
            {response.payload.results.splice(0, 6).map((movie) => {
              return (
                <UpcomingMovieCard
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
      </div>
      <div></div>
      {/* Error */}
      {response.state === "error" && <div>{response.error}</div>}
      {/* Spinner state */}
      {response.state === "loading" && <Spinner />}
    </div>
  );
}
