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
export default function TVCard() {
  return (
    <Card className="tv-card">
      <div className="tv-card__svg-wrapper">
        <div className="tv-card__background-gradient" />
        <div className="tv-card__svg d-flex align-center gap-1">
          {playMiniSVG}
          <a>Watch now</a>
        </div>
        <CardImage
          src={`${APIEndpoints.Image}/mu3lEhGovyhKHPJzb7HNYtZUCDT.jpg`}
          className="tv-card__image"
        />
      </div>
      <CardHeader>
        <CardTitle className="tv-card__title">Binnelanders</CardTitle>
        <CardRating rating={5.5} />
      </CardHeader>
    </Card>
  );
}
