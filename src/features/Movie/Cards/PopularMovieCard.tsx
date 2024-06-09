import Button from "@/components/Button/button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card/base-card";
import { MovieModel } from "@/models/Movie.model";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "overview" | "id" | "vote_average"
>;

export default function PopularMovieCard() {
  return (
    <Card>
      <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCW-Jx7WpULfSFUcjMjoQSclEhay44yYJ_w&s" />
      <CardHeader>
        <CardTitle>
          <a>The Shawshank Redemption</a>
        </CardTitle>
        <CardRating rating={8.7} />
      </CardHeader>
      <CardContent>
        <CardDescription>
          Imprisoned in the 1940s for the double murder of his wife and her
          lover, upstanding banker Andy Dufresne begins a new life at the
          Shawshank prison, where he puts his accounting skills to work for an
          amoral warden. During his long stretch in prison, Dufresne comes to be
          admired by the other inmates -- including an older prisoner named Red
          -- for his integrity and unquenchable sense of hope.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="d-flex justify-center">
          <Button>Watch list</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
