import { tabTypeAndIcon } from "@/assets/TabIcons";
import Card, {
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/Card/base-card";
import { SearchModel } from "@/models/Search.model";
import { APIEndpoints } from "@/utils/endpoints";

type ISearchResultProps = { data: SearchModel; isLoading?: boolean };
function SearchResultCard({ data, isLoading }: ISearchResultProps) {
  const icon = tabTypeAndIcon[data?.media_type || "all"]; //fallback to "all"
  const title =
    data.media_type === "movie" ? data.original_title : data.original_name;
  const imagePath =
    data.media_type === "person" ? data.profile_path : data.poster_path;
  const overview =
    data.media_type === "person"
      ? "Department: " + data.known_for_department
      : data.overview;
  return (
    <Card isLoading={isLoading} className="search-result">
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
