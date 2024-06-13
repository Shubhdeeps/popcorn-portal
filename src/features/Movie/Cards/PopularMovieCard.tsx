import FavoriteButton from "@/components/Button/favorite-button";
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
import { Link } from "react-router-dom";

type INowPlayingProps = Pick<
  MovieModel,
  "title" | "overview" | "id" | "vote_average" | "poster_path"
> & {
  isLoading?: boolean;
};

export default function PopularMovieCard({
  id,
  overview,
  title,
  vote_average,
  poster_path,
  isLoading,
}: INowPlayingProps) {
  const props = {
    id,
    overview,
    title,
    vote_average,
    poster_path,
    isLoading,
  };
  return (
    <Card className="popular-movie-card" isLoading={isLoading}>
      <CardImage
        className="popular-movie-card__image"
        src={`${APIEndpoints.Image}${poster_path}`}
      />
      <CardHeader>
        <CardTitle>
          <Link to={`/movie/${id}`}>{title}</Link>
        </CardTitle>
        <CardRating rating={vote_average} />
      </CardHeader>
      <CardContent>
        <CardDescription>{overview}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="d-flex justify-center">
          <FavoriteButton
            mediaType="movie"
            titlePrimary="Watch later"
            props={props as unknown as MovieModel}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
