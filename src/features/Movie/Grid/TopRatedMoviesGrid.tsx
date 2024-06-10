import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import Spinner from "@/components/Spinner";
import PopularMovieCard from "../Cards/PopularMovieCard";
import { MovieModel } from "@/models/Movie.model";

export default function TopRatedMoviesGrid() {
  const { error, loading, results } = useFetch<MovieModel>("TopRated");

  return (
    <div className="general-card-grid">
      <div>
        <Carousel>
          {results.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <PopularMovieCard {...media} />
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* Error */}
      {Boolean(error) && <div>{error}</div>}
      {/* Spinner state */}
      {loading && <Spinner />}
    </div>
  );
}
