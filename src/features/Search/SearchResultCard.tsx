import { tabTypeAndIcon } from "@/assets/TabIcons";
import Card, {
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/Card/base-card";
import { SearchModel } from "@/models/Search.model";
import { APIEndpoints } from "@/utils/endpoints";
import { useNavigate } from "react-router-dom";

type ISearchResultProps = {
  data: SearchModel;
  isLoading?: boolean;
  closeModal: () => void;
};
function SearchResultCard({ data, isLoading, closeModal }: ISearchResultProps) {
  const icon = tabTypeAndIcon[data?.media_type || "all"]; //fallback to "all"
  const navigate = useNavigate();
  function handleNavigate() {
    closeModal();
    navigate(`/${data.media_type}/${data.id}`);
  }
  const title =
    data.media_type === "movie" ? data.original_title : data.original_name;
  const imagePath =
    data.media_type === "person" ? data.profile_path : data.poster_path;
  const overview =
    data.media_type === "person"
      ? "Department: " + data.known_for_department
      : data.overview;
  return (
    <Card
      onClick={handleNavigate}
      isLoading={isLoading}
      className="search-result"
    >
      <CardContent className="search-result__content">
        {imagePath && (
          <CardImage
            className="search-result__image"
            src={`${APIEndpoints.Image}${imagePath}`}
          />
        )}
        <div>
          <CardTitle>
            {title} {icon("")}
          </CardTitle>
          <CardDescription>{overview}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}

export default SearchResultCard;
