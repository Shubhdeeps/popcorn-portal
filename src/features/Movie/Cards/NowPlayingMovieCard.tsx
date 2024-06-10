import Card, {
  CardHeader,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card/base-card";
import { MovieModel } from "@/models/Movie.model";
import { APIEndpoints } from "@/utils/endpoints";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "id" | "vote_average" | "poster_path"
> & {
  isLoading?: boolean;
};

export default function NowPlayingMovieCard({
  id,
  title,
  vote_average,
  poster_path,
  isLoading = false,
}: INowPlayingProps) {
  return (
    <Card isLoading={isLoading} className="now-playing-movie-card">
      <CardImage
        src={`${APIEndpoints.Image}${poster_path}`}
        className="now-playing-movie-card__card-image"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardRating rating={vote_average} />
      </CardHeader>
      <a>Check now</a>
    </Card>
  );
}
