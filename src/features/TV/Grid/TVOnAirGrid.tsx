import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import Spinner from "@/components/Spinner";
import { TvShow } from "@/models/TV.model";
import TVCard from "../Cards/TvCard";

export default function TVOnAirGrid() {
  const { error, loading, results } = useFetch<TvShow>("TVOnAir");

  return (
    <div className="general-card-grid">
      <div>
        <Carousel>
          {results.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <TVCard {...media} />
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
