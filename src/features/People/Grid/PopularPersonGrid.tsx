import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import Spinner from "@/components/Spinner";
import PersonCard from "../Cards/PersonCard";
import { Person } from "@/models/Person.model";

export default function TVOnAirGrid() {
  const { error, loading, results, setScrolledToEnd } =
    useFetch<Person>("PeoplePopular");

  return (
    <div className="general-card-grid">
      <div>
        <Carousel onScrolledToEnd={(state) => setScrolledToEnd(state)}>
          {results.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <PersonCard isLoading {...media} />
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
