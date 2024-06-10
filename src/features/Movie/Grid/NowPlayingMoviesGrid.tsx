import NowPlayingMovieCard from "../Cards/NowPlayingMovieCard";
import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import Spinner from "@/components/Spinner";
import { MovieModel } from "@/models/Movie.model";

export default function NowPlayingMoviesGrid() {
  const { error, fetchMore, hasMore, loading, results } =
    useFetch<MovieModel>("NowPlaying");

  return (
    <div className="general-card-grid">
      <div>
        <Carousel>
          {results.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <NowPlayingMovieCard {...media} />
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
