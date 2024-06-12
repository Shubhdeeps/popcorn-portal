import { AppDispatch, RootState } from "@/store";
import {
  WatchLaterDataModel,
  addToWatchLater,
  removeFromWatchLater,
} from "@/store/watchLater/watchLater.slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "./button";

type IProps = {
  props: Omit<WatchLaterDataModel, "addedOn" | "media_type">;
  mediaType: "movie" | "tv";
  titlePrimary?: string;
};
export default function FavoriteButton({
  props,
  mediaType,
  titlePrimary = "Add to favorite",
}: IProps) {
  const data = useSelector((state: RootState) => state.watchLater.data);
  const isFavorite = Boolean(data.find((item) => item.id === props.id));
  const dispatch = useDispatch<AppDispatch>();
  function handleFavoriteSwitch() {
    if (isFavorite) {
      console.log("removing");

      dispatch(removeFromWatchLater(props.id));
      return;
    }

    dispatch(addToWatchLater({ ...props, media_type: mediaType }));
  }
  return (
    <>
      <Button onClick={handleFavoriteSwitch}>
        {isFavorite ? "Added" : titlePrimary}
      </Button>
    </>
  );
}
