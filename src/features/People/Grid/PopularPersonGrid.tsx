import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import PersonCard from "../Cards/PersonCard";
import { Person } from "@/models/Person.model";
import ErrorCard from "@/components/Error/ErrorCard";
import { APIEndpointKeys } from "@/utils/endpoints";
import { skeletonGenerator } from "@/utils/skeletonGenerator";

type IProps = {
  apiKey: APIEndpointKeys;
  apiEndpoint?: string;
  contentId: string;
  overrideLoadingState?: boolean;
};
export default function PersonGrid({
  apiKey,
  apiEndpoint,
  contentId,
  overrideLoadingState,
}: IProps) {
  const { error, loading, results, setScrolledToEnd } = useFetch<Person>(
    apiKey,
    contentId,
    apiEndpoint
  );
  const array = skeletonGenerator(results, loading);

  const isLoading = overrideLoadingState && loading;

  return (
    <div className="general-card-grid">
      <div>
        <Carousel onScrolledToEnd={(state) => setScrolledToEnd(state)}>
          {array.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <PersonCard isLoading={isLoading} {...media} />
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
