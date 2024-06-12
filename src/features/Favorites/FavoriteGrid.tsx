import Carousel from "@/components/Carousel";
import TVCard from "../TV/Cards/TvCard";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import NowPlayingMovieCard from "../Movie/Cards/NowPlayingMovieCard";

export default function FavoriteGrid() {
  const data = useSelector((state: RootState) => state.watchLater.data);
  const isEmpty = data.length === 0;
  return (
    <div className="general-card-grid">
      <Carousel>
        {data.map((media) => {
          const MediaElement = () => {
            if (media.media_type === "tv") {
              return <TVCard {...media} />;
            }
            return <NowPlayingMovieCard {...media} />;
          };

          return (
            <div className="general-card-grid__card " key={media.id}>
              <MediaElement />
            </div>
          );
        })}
      </Carousel>
      {isEmpty && <div>List empty!</div>}
    </div>
  );
}
