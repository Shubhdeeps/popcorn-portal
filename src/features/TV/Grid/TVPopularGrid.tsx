import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import { TvShow } from "@/models/TV.model";
import TVCard from "../Cards/TvCard";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import ErrorCard from "@/components/Error/ErrorCard";

export default function TVOnAirGrid() {
  const { error, loading, results, setScrolledToEnd } =
    useFetch<TvShow>("TVPopular");
  const array = skeletonGenerator(results, loading);

  return (
    <div className="general-card-grid">
      <div>
        <Carousel onScrolledToEnd={(state) => setScrolledToEnd(state)}>
          {array.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <TVCard {...media} />
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
