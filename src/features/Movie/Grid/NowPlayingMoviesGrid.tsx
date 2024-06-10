import NowPlayingMovieCard from "../Cards/NowPlayingMovieCard";
import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import { MovieModel } from "@/models/Movie.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";

export default function NowPlayingMoviesGrid() {
  const { error, loading, results } = useFetch<MovieModel>("NowPlaying");
  const array = skeletonGenerator(results, loading);

  return (
    <div className="general-card-grid">
      <div>
        <Carousel>
          {array.map((media) => {
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
    </div>
  );
}
