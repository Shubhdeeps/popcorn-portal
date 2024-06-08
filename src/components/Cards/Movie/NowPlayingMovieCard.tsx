import { starSVG } from "@/assets/Star.svg";
import Card, { CardContent, CardImage, CardTitle } from "@/features/Card";
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
      <CardContent>
        <CardTitle>Kingdom of the Planet of the Apes</CardTitle>
        <div className="d-flex align-center gap-1 justify-start">
          {starSVG} 6.9
        </div>
      </CardContent>
      <a>Check now</a>
    </Card>
  );
}
