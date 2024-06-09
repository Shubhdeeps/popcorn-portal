import Carousel from "@/components/Carousel";
import Spinner from "@/components/Spinner";
import { useFetch } from "@/hooks/useFetch";
import { BaseResponse } from "@/models/EndPoints.model";
import PopularMovieCard from "../Movie/Cards/PopularMovieCard";
import NowPlayingMovieCard from "../Movie/Cards/NowPlayingMovieCard";
import TVCard from "../TV/Cards/TvCard";
import PersonCard from "../People/Cards/PersonCard";

type IGeneralGridProps = {
  apiEndpoint: string;
  RenderCard:
    | typeof PopularMovieCard
    | typeof NowPlayingMovieCard
    | typeof TVCard
    | typeof PersonCard;
};

/**
 * Extend this grid layout for rendering horizontal layout
 * @returns
 */
export default function GeneralGrid<T extends BaseResponse>({
  apiEndpoint,
  RenderCard,
}: IGeneralGridProps) {
  const response = useFetch<T>(apiEndpoint);
  console.log({ response });
  return (
    <div className="popular-movies-grid">
      <div>
        {response.state === "success" && (
          <Carousel>
            {response.payload.results.map((media) => {
              return (
                <div className="popular-movies-grid__card " key={media.id}>
                  <RenderCard {...media} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
      {/* Error */}
      {response.state === "error" && <div>{response.error}</div>}
      {/* Spinner state */}
      {response.state === "loading" && <Spinner />}
    </div>
  );
}
