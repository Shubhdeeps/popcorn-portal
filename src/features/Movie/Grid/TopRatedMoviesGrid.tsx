import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import PopularMovieCard from "../Cards/PopularMovieCard";
import { MovieModel } from "@/models/Movie.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import ErrorCard from "@/components/Error/ErrorCard";

type IProps = {
  contentId: string;
};
export default function TopRatedMoviesGrid({ contentId }: IProps) {
  const { error, loading, results, setScrolledToEnd } = useFetch<MovieModel>(
    "TopRated",
    contentId
  );
  const array = skeletonGenerator(results, loading);

  return (
    <div className="general-card-grid">
      <div>
        <Carousel onScrolledToEnd={(state) => setScrolledToEnd(state)}>
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
      {Boolean(error) && <ErrorCard>{error}</ErrorCard>}
    </div>
  );
}
