import UpcomingMovieCard from "../Cards/UpcomingMovieCard";
import Carousel from "@/components/Carousel";
import UpcomingMovieMiniCard from "../Cards/UpcomingMovieMiniCard";
import { useFetch } from "@/hooks/useFetch1";
import Spinner from "@/components/Spinner";
import { MovieModel } from "@/models/Movie.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import ErrorCard from "@/components/Error/ErrorCard";

type IProps = {
  contentId: string;
};
export default function UpcomingMoviesGrid({ contentId }: IProps) {
  const { error, loading, results } = useFetch<MovieModel>(
    "Upcoming",
    contentId
  );

  const dataArray = [...results];
  const top6 = dataArray.splice(0, 6);
  const array = skeletonGenerator(dataArray, loading);

  return (
    <>
      <div className="upcoming-movie-grid">
        <div className="upcoming-movie-grid__carousel-wrapper">
          {/* {response.state === "success" && ( */}
          <Carousel animated>
            {top6.map((movie) => {
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
          <div className="upcoming-movie-grid__gradient" />
        </div>
        <div className="gradient-wrapper">
          <div className="upcoming-movie-grid__mini-carousel-wrapper">
            <>
              {array.map((movie) => {
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
          <div className="horizontal-gradient">{/* <a>Browse all</a> */}</div>
        </div>
      </div>
      {/* Error */}
      {Boolean(error) && <ErrorCard>{error}</ErrorCard>}
      {/* Spinner state */}
      {loading && <Spinner />}
    </>
  );
}
