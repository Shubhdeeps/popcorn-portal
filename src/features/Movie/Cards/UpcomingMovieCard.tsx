import { playSVG } from "@/assets/Play.svg";
import {
  CardDescription,
  CardImage,
  CardRating,
} from "@/components/Card/base-card";
import { MovieModel } from "@/models/Movie.model";
import { APIEndpoints } from "@/utils/endpoints";
import { useNavigate } from "react-router-dom";

type IUpcomingMovieProps = Pick<
  MovieModel,
  | "title"
  | "id"
  | "vote_average"
  | "poster_path"
  | "release_date"
  | "backdrop_path"
> & {
  isLoading: boolean;
};
export default function UpcomingMovieCard({
  backdrop_path,
  id,
  poster_path,
  release_date,
  title,
}: IUpcomingMovieProps) {
  const date = Date.parse(release_date);
  const now = Date.now();
  const isReleased = now > date ? "Released" : "Releasing";
  const navigate = useNavigate();
  return (
    <div className="upcoming-wrapper">
      <img
        className="upcoming-wrapper__image"
        src={`${APIEndpoints.Image}${backdrop_path}`}
      />
      <div className="upcoming-wrapper__body">
        <div className="upcoming-card">
          <div
            onClick={() => navigate(`/movie/${id}`)}
            className="upcoming-card__content"
          >
            <CardImage
              className="upcoming-card__card-image"
              src={`${APIEndpoints.Image}${poster_path}`}
            />
            <div className="d-flex gap-2 align-center">
              <span>{playSVG}</span>
              <div className="d-flex flex-col">
                <div className="upcoming-card__title">{title}</div>
                <div className="upcoming-card__sub-title">
                  Watch the Trailer
                </div>
                <CardRating rating={7.6} />
                <CardDescription>
                  {isReleased} on {release_date}
                </CardDescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
