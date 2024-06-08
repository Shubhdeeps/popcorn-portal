import { starSVG } from "@/assets/Star.svg";
import Card, {
  CardContent,
  CardHeader,
  CardImage,
  CardRating,
  CardTitle,
} from "@/features/Card";
import { MovieModel } from "@/models/Movie.model";

interface INowPlayingProps
  extends Pick<MovieModel, "title" | "release_date" | "id" | "vote_average"> {}
export default function NowPlayingMovieCard() {
  return (
    <Card className="now-playing-movie-card">
      <CardImage
        src="https://novouae.gumlet.io/Files//Movie/997x498/kingdom-of-the-planet-apes-2024.jpg?w=480&dpr=2.6"
        className="now-playing-movie-card__card-image"
      />
      <CardHeader>
        <CardTitle>Kingdom of the Planet of the Apes</CardTitle>
        <CardRating rating={6.9} />
      </CardHeader>
      <a>Check now</a>
    </Card>
  );
}
