import { playMiniSVG } from "@/assets/Play.svg";
import Card, {
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/Card/base-card";
import { TVShowOverview } from "@/models/TV.model";
import { APIEndpoints } from "@/utils/endpoints";

type ITVProps = Pick<
  TVShowOverview["seasons"][number],
  "poster_path" | "name" | "episode_count" | "season_number"
> & {
  isLoading?: boolean;
};
export default function TVSeasonCard({
  name,
  poster_path,
  episode_count,
  isLoading,
  season_number,
}: ITVProps) {
  return (
    <Card isLoading={isLoading} className="tv-card">
      <div className="tv-card__svg-wrapper">
        <CardImage
          src={`${APIEndpoints.Image}/${poster_path}`}
          className="tv-card__image"
        />
        <div className="tv-card__background-gradient" />
        {/* <div className="tv-card__svg"></div> */}
        <div>{name}</div>
        <div>Episodes {episode_count}</div>
      </div>
      <CardHeader>
        <CardTitle className="tv-card__title">Season {season_number}</CardTitle>
      </CardHeader>
    </Card>
  );
}
