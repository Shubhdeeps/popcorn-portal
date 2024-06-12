import NowPlayingMovieCard from "../Cards/NowPlayingMovieCard";
import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import { MovieModel } from "@/models/Movie.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import ErrorCard from "@/components/Error/ErrorCard";

export default function NowPlayingMoviesGrid() {
  const { error, loading, results, setScrolledToEnd } =
    useFetch<MovieModel>("NowPlaying");
  const array = skeletonGenerator(results, loading);

  return (
    <div className="general-card-grid">
      <div>
        <Carousel onScrolledToEnd={(state) => setScrolledToEnd(state)}>
          {array.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <NowPlayingMovieCard {...media} />
              </div>
            );
          })}
        </Carousel>
      </div>
      {Boolean(error) && <ErrorCard>{error}</ErrorCard>}
      {/* Error */}
    </div>
  );
}
