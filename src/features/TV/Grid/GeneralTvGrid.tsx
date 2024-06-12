import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import { TvShow } from "@/models/TV.model";
import TVCard from "../Cards/TvCard";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import ErrorCard from "@/components/Error/ErrorCard";
import { APIEndpointKeys } from "@/utils/endpoints";

type IProps = {
  apiEndPointKey: APIEndpointKeys;
  apiEndPoint?: string;
  contentId: string;
  overrideLoadingState?: boolean;
};
export default function GeneralTvGrid({
  apiEndPoint,
  apiEndPointKey,
  contentId,
  overrideLoadingState,
}: IProps) {
  const { error, loading, results, setScrolledToEnd } = useFetch<TvShow>(
    apiEndPointKey,
    contentId,
    apiEndPoint
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
                <TVCard isLoading={isLoading} {...media} />
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
