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
import { APIEndpoints } from "@/utils/endpoints";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "overview" | "id" | "vote_average" | "poster_path"
>;

export default function PopularMovieCard({
  id,
  overview,
  title,
  vote_average,
  poster_path,
}: INowPlayingProps) {
  return (
    <Card>
      <CardImage src={`${APIEndpoints.Image}${poster_path}`} />
      <CardHeader>
        <CardTitle>
          <a>{title}</a>
        </CardTitle>
        <CardRating rating={vote_average} />
      </CardHeader>
      <CardContent>
        <CardDescription>{overview}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="d-flex justify-center">
          <Button>Watch list</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
