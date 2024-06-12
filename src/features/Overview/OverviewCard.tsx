import {
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
} from "@/components/Card/base-card";
import { MediaOverviewDataModel } from "@/store/overview/mediaOverview.slice";
import { APIEndpoints } from "@/utils/endpoints";

type IOverviewCardProps = MediaOverviewDataModel;

/**
 * Valid for TV and Movie
 * @param param0
 * @returns
 */
export default function OverviewCard({ props }: { props: IOverviewCardProps }) {
  if (props.type === "person") {
    return <></>;
  }
  const { poster_path, overview } = props;
  const posterPath = `${APIEndpoints.Image}${poster_path}`;
  const title = props.type === "movie" ? props.title : props.name;
  return (
    <div className="overview-card">
      <CardImage className="overview-card__image" src={posterPath} />

      <CardContent className="d-flex flex-col">
        <CardTitle className="overview-card__title">{title}</CardTitle>
        <CardDescription>{overview}</CardDescription>
      </CardContent>
    </div>
  );
}
