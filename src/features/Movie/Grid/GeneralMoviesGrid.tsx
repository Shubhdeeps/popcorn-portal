import NowPlayingMovieCard from "../Cards/NowPlayingMovieCard";
import { useFetch } from "@/hooks/useFetch1";
import Carousel from "@/components/Carousel";
import { MovieModel } from "@/models/Movie.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import ErrorCard from "@/components/Error/ErrorCard";
import { APIEndpointKeys } from "@/utils/endpoints";

type IProps = {
  endPointKey?: APIEndpointKeys;
  ApiEndPoint?: string;
  contentId: string;
  overwriteLoadingState?: boolean;
};
export default function GeneralMoviesGrid({
  endPointKey = "NowPlaying",
  contentId,
  ApiEndPoint,
  overwriteLoadingState,
}: IProps) {
  const { error, loading, results, setScrolledToEnd } = useFetch<MovieModel>(
    endPointKey,
    contentId,
    ApiEndPoint
  );
  const array = skeletonGenerator(results, loading);
  const isLoading = overwriteLoadingState && loading;

  return (
    <div className="general-card-grid">
      <div>
        <Carousel onScrolledToEnd={(state) => setScrolledToEnd(state)}>
          {array.map((media) => {
            return (
              <div className="general-card-grid__card " key={media.id}>
                <NowPlayingMovieCard isLoading={isLoading} {...media} />
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
