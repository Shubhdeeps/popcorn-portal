import { CardFooter, CardRating } from "@/components/Card/base-card";
import Carousel from "@/components/Carousel";
import HeadlineTypography from "@/components/Typography/headline-typography";
import VideoPlayer from "@/components/Video/video-player";
import ActionBar from "@/features/Overview/ActionBar";
import AdditionalOverviewData from "@/features/Overview/AdditionalData";
import OverviewCard from "@/features/Overview/OverviewCard";
import PersonGrid from "@/features/People/Grid/PopularPersonGrid";
import TVSeasonCard from "@/features/TV/Cards/TvSeasonCard";
import GeneralTvGrid from "@/features/TV/Grid/GeneralTvGrid";
import { AppDispatch, RootState } from "@/store";
import {
  MediaOverviewDataModel,
  overviewReducerAsync,
} from "@/store/overview/mediaOverview.slice";
import { APIEndpoints } from "@/utils/endpoints";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function TvOverviewPage() {
  const { tvId } = useParams();
  const data = useSelector(
    (state: RootState) => state.overview.data
  ) as MediaOverviewDataModel;
  const dispatch = useDispatch<AppDispatch>();
  console.log({ data });
  const videoResults = data.videoResult?.results || [];
  const video = videoResults.find((video) => video.type === "Trailer");
  console.log({ video });
  useEffect(() => {
    if (tvId) {
      console.log("calling with: ", {
        mediaId: +tvId,
        type: "movie",
      });
      dispatch(
        overviewReducerAsync({
          mediaId: +tvId,
          type: "tv",
        })
      );
    }
  }, [dispatch, tvId]);

  if (data.type !== "tv") {
    return <></>;
  }
  const hasSeasons = Boolean(data.seasons.length);

  const recommendedEndpoint =
    APIEndpoints.Recommendations + "/" + tvId + "/similar";

  const castEndpoint = `${APIEndpoints.PersonTVCredits}/${tvId}/credits`;

  return (
    <div className="media-overview-page">
      <ActionBar />
      {video && <VideoPlayer videoKey={video?.key} videoSite={video?.site} />}
      <OverviewCard props={data} />
      <AdditionalOverviewData title="">{data.tagline}</AdditionalOverviewData>
      {data.vote_average && (
        <CardFooter className="media-overview-page__footer">
          <CardRating rating={data.vote_average} />
        </CardFooter>
      )}
      <AdditionalOverviewData title="Country of origin">
        {data.origin_country}
      </AdditionalOverviewData>
      <AdditionalOverviewData title="Language">
        {data.original_language}
      </AdditionalOverviewData>
      <HeadlineTypography>Cast credits</HeadlineTypography>
      {tvId && (
        <PersonGrid
          overrideLoadingState
          contentId={tvId}
          apiEndpoint={castEndpoint}
          apiKey="PersonTVCredits"
        />
      )}

      {hasSeasons && (
        <>
          <HeadlineTypography>Seasons</HeadlineTypography>
          <Carousel>
            {data.seasons.map((season) => {
              return (
                <div className="general-card-grid__card " key={season.id}>
                  <TVSeasonCard {...season} />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
      <HeadlineTypography>Related Series</HeadlineTypography>
      {tvId && (
        <GeneralTvGrid
          overrideLoadingState
          contentId={tvId}
          apiEndPointKey="TV"
          apiEndPoint={recommendedEndpoint}
        />
      )}
    </div>
  );
}
