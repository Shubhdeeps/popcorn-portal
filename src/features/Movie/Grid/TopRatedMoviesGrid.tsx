import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import PopularMovieCard from "../Cards/PopularMovieCard";
import { MovieModel } from "@/models/Movie.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";

export default function TopRatedMoviesGrid() {
  const { error, loading, results, setScrolledToEnd } =
    useFetch<MovieModel>("TopRated");
  const array = skeletonGenerator(results, loading);

  return (
    <div className="general-card-grid">
      <div>
        <Carousel
          eventScrolledTOEnd={(state) => {
            setScrolledToEnd(state);
          }}
        >
          {array.map((media) => {
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
    </div>
  );
}
