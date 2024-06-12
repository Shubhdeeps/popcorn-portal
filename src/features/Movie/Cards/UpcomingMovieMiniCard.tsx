import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card/base-card";
import { MovieModel } from "@/models/Movie.model";
import { APIEndpoints } from "@/utils/endpoints";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "overview" | "id" | "vote_average" | "poster_path"
> & {
  isLoading?: boolean;
};

export default function UpcomingMovieMiniCard({
  id,
  overview,
  title,
  vote_average,
  poster_path,
  isLoading,
}: INowPlayingProps) {
  const posterPath = `${APIEndpoints.Image}${poster_path}`;
  return (
    <Card isLoading={isLoading} className="upcoming-movie-mini-card">
      <CardImage className="upcoming-movie-mini-card__image" src={posterPath} />

      <CardContent className="d-flex flex-col">
        <CardTitle>
          <a>{title}</a>
        </CardTitle>
        <CardDescription>{overview}</CardDescription>

        <CardFooter>
          <CardRating rating={vote_average} />
        </CardFooter>
      </CardContent>
    </Card>
  );
}
