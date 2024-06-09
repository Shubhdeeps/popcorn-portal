import { playSVG } from "@/assets/Play.svg";
import Card, {
  CardContent,
  CardDescription,
  CardImage,
  CardRating,
  CardTitle,
} from "@/components/Card";
import { MovieModel } from "@/models/Movie.model";

type IUpcomingMovieProps = Pick<
  MovieModel,
  | "title"
  | "overview"
  | "id"
  | "vote_average"
  | "poster_path"
  | "release_date"
  | "backdrop_path"
>;
export default function UpcomingMovieCard() {
  const date = Date.parse("2024-06-05");
  const now = Date.now();
  const isReleased = now > date ? "Released" : "Releasing";
  console.log({ now, date, isReleased });
  return (
    <div className="upcoming-wrapper">
      <img
        className="upcoming-wrapper__image"
        src="https://image.tmdb.org/t/p/w500/2JmEZtZsGVYvcUeMWze9qb1Ui03.jpg"
      />
      <div className="upcoming-wrapper__body">
        <div className="upcoming-card">
          <div className="upcoming-card__content">
            <CardImage
              className="upcoming-card__card-image"
              src="https://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg"
            />
            <div className="d-flex gap-2 align-center">
              <span>{playSVG}</span>
              <div className="d-flex flex-col">
                <div className="upcoming-card__title">
                  Glen Powell and Adria Arjona Star in 'Hit Man'
                </div>
                <div className="upcoming-card__sub-title">
                  Watch the Trailer
                </div>
                <CardRating rating={7.6} />
                <CardDescription>{isReleased} on 2024-06-05</CardDescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
