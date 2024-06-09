import Card, {
  CardHeader,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card/base-card";
import { MovieModel } from "@/models/Movie.model";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "release_date" | "id" | "vote_average"
>;
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
