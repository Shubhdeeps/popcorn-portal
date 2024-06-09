import { tabTypeAndIcon } from "@/assets/TabIcons";
import {
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/Card/base-card";
import { SearchModel } from "@/models/Search.model";

type ISearchResultProps = { data: SearchModel };
export default function SearchResultCard({ data }: ISearchResultProps) {
  const icon = tabTypeAndIcon[data?.media_type || "all"]; //fallback to "all"
  const title =
    data.media_type === "movie" ? data.original_title : data.original_name;

  const overview = data.media_type === "person" ? "" : data.overview;
  return (
    <div className="search-result">
      <CardContent className="search-result__content">
        {icon("")}
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{overview}</CardDescription>
        </div>
      </CardContent>
    </div>
  );
}
