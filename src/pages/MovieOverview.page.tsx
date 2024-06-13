import FavoriteButton from "@/components/Button/favorite-button";
import { CardFooter, CardRating } from "@/components/Card/base-card";
import DocumentHelmet from "@/components/Helmet/DocumentHelmet";
import HeadlineTypography from "@/components/Typography/headline-typography";
import VideoPlayer from "@/components/Video/video-player";
import GeneralMoviesGrid from "@/features/Movie/Grid/GeneralMoviesGrid";
import ActionBar from "@/features/Overview/ActionBar";
import AdditionalOverviewData from "@/features/Overview/AdditionalData";
import OverviewCard from "@/features/Overview/OverviewCard";
import PersonGrid from "@/features/People/Grid/PopularPersonGrid";
import { MovieModel } from "@/models/Movie.model";
import { AppDispatch, RootState } from "@/store";
import {
  MediaOverviewDataModel,
  overviewReducerAsync,
} from "@/store/overview/mediaOverview.slice";
import { APIEndpoints } from "@/utils/endpoints";
import {
  dateStrToTimeStr,
  formatMinutesToTimeStr,
} from "@/utils/timeFormatter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function MovieOverviewPage() {
  const { movieId } = useParams();
  const data = useSelector(
    (state: RootState) => state.overview.data
  ) as MediaOverviewDataModel;
  const dispatch = useDispatch<AppDispatch>();
  const videoResults = data.videoResult?.results || [];
  const video = videoResults.find((video) => video.type === "Trailer");
  useEffect(() => {
    if (movieId) {
      dispatch(
        overviewReducerAsync({
          mediaId: +movieId,
          type: "movie",
        })
      );
    }
  }, [dispatch, movieId]);
  if (data.type !== "movie") {
    return <></>;
  }

  const recommendedEndpoint =
    APIEndpoints.Recommendations + "/" + movieId + "/similar";
  const castEndpoint = `${APIEndpoints.PersonCredits}/${movieId}/credits`;

  return (
    <div className="media-overview-page">
      <DocumentHelmet>{data.original_title}</DocumentHelmet>
      <ActionBar />
      {video && <VideoPlayer videoKey={video?.key} videoSite={video?.site} />}
      <OverviewCard props={data} />
      <AdditionalOverviewData title="">{data.tagline}</AdditionalOverviewData>
      {data.vote_average && (
        <CardFooter className="media-overview-page__footer">
          <CardRating rating={data.vote_average} />
        </CardFooter>
      )}
      <AdditionalOverviewData title="Duration">
        {formatMinutesToTimeStr(data.runtime)}
      </AdditionalOverviewData>
      <AdditionalOverviewData title="Country of origin">
        {data.origin_country}
      </AdditionalOverviewData>
      <AdditionalOverviewData title="Language">
        {data.original_language}
      </AdditionalOverviewData>
      <AdditionalOverviewData title="Released on">
        {dateStrToTimeStr(data.release_date)}
      </AdditionalOverviewData>
      <AdditionalOverviewData title="">
        <FavoriteButton
          props={data as unknown as MovieModel}
          mediaType="movie"
        />
      </AdditionalOverviewData>
      <>
        <HeadlineTypography>Cast credits</HeadlineTypography>
        {movieId && (
          <PersonGrid
            overrideLoadingState
            contentId={movieId}
            apiEndpoint={castEndpoint}
            apiKey="PersonCredits"
          />
        )}
        <HeadlineTypography>Related Movies</HeadlineTypography>
        {movieId && (
          <GeneralMoviesGrid
            overwriteLoadingState
            contentId={movieId}
            endPointKey="Recommendations"
            ApiEndPoint={recommendedEndpoint}
          />
        )}
      </>
    </div>
  );
}
