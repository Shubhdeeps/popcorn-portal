import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card";
import { MovieModel } from "@/models/Movie.model";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "overview" | "id" | "vote_average"
>;

export default function UpcomingMovieMiniCard() {
  return (
    <Card className="upcoming-movie-mini-card">
      <CardImage
        className="upcoming-movie-mini-card__image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCW-Jx7WpULfSFUcjMjoQSclEhay44yYJ_w&s"
      />

      <CardContent className="d-flex flex-col">
        <CardTitle>
          <a>The Shawshank Redemption</a>
        </CardTitle>
        <CardDescription>
          Imprisoned in the 1940s for the double murder of his wife and her
          lover, upstanding banker Andy Dufresne begins a new life at the
          Shawshank prison, where he puts his accounting skills to work for an
          amoral warden. During his long stretch in prison, Dufresne comes to be
          admired by the other inmates -- including an older prisoner named Red
          -- for his integrity and unquenchable sense of hope.
        </CardDescription>

        <CardFooter>
          <CardRating rating={8.7} />
        </CardFooter>
      </CardContent>
    </Card>
  );
}
