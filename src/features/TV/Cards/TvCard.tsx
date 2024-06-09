import { playMiniSVG } from "@/assets/Play.svg";
import Card, {
  CardHeader,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card/base-card";
import { TvShow } from "@/models/TV.model";
import { APIEndpoints } from "@/utils/endpoints";

type ITVProps = Pick<TvShow, "poster_path" | "id" | "name" | "vote_average">;
export default function TVCard({
  id,
  name,
  poster_path,
  vote_average,
}: ITVProps) {
  return (
    <Card className="tv-card">
      <div className="tv-card__svg-wrapper">
        <div className="tv-card__background-gradient" />
        <div className="tv-card__svg d-flex align-center gap-1">
          {playMiniSVG}
          <a>Watch now</a>
        </div>
        <CardImage
          src={`${APIEndpoints.Image}/${poster_path}`}
          className="tv-card__image"
        />
      </div>
      <CardHeader>
        <CardTitle className="tv-card__title">{name}</CardTitle>
        <CardRating rating={vote_average} />
      </CardHeader>
    </Card>
  );
}
