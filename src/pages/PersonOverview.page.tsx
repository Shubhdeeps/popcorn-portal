import { CardFooter, CardRating } from "@/components/Card/base-card";
import Carousel from "@/components/Carousel";
import HeadlineTypography from "@/components/Typography/headline-typography";
import VideoPlayer from "@/components/Video/video-player";
import GeneralMoviesGrid from "@/features/Movie/Grid/GeneralMoviesGrid";
import ActionBar from "@/features/Overview/ActionBar";
import AdditionalOverviewData from "@/features/Overview/AdditionalData";
import OverviewCard from "@/features/Overview/OverviewCard";
import PersonCard from "@/features/People/Cards/PersonCard";
import GeneralTvGrid from "@/features/TV/Grid/GeneralTvGrid";
import { AppDispatch, RootState } from "@/store";
import {
  MediaOverviewDataModel,
  overviewReducerAsync,
} from "@/store/overview/mediaOverview.slice";
import { APIEndpoints } from "@/utils/endpoints";
import { dateStrToTimeStr } from "@/utils/timeFormatter";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PersonOverviewPage() {
  const { personId } = useParams();
  const data = useSelector(
    (state: RootState) => state.overview.data
  ) as MediaOverviewDataModel;
  const dispatch = useDispatch<AppDispatch>();
  console.log({ data });
  useEffect(() => {
    if (data.id) {
      //only for testing
      return;
    }
    console.log("Fetching....");
    if (personId) {
      console.log("calling with: ", {
        mediaId: +personId,
        type: "person",
      });
      dispatch(
        overviewReducerAsync({
          mediaId: +personId,
          type: "person",
        })
      );
    }
  }, [dispatch, personId]);

  if (data.type !== "person") {
    return <></>;
  }

  const movieCredits = `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US`;
  const tvCredits = `https://api.themoviedb.org/3/person/${personId}/tv_credits?language=en-US`;
  return (
    <div className="media-overview-page">
      <ActionBar />
      <div className="d-flex justify-center mb-1">
        <PersonCard
          id={data.id}
          name={data.name}
          profile_path={data.profile_path || ""}
        />
      </div>

      {data.birthday && (
        <AdditionalOverviewData title="Born on">
          {dateStrToTimeStr(data.birthday)}
        </AdditionalOverviewData>
      )}
      <AdditionalOverviewData title="Birth place">
        {data.place_of_birth}
      </AdditionalOverviewData>

      <AdditionalOverviewData title="Department">
        {data.known_for_department}
      </AdditionalOverviewData>

      {data.biography && <span>{data.biography}</span>}

      <HeadlineTypography>Movie Credits</HeadlineTypography>
      <GeneralMoviesGrid
        endPointKey="Recommendations"
        ApiEndPoint={movieCredits}
      />

      <HeadlineTypography>TV Credits</HeadlineTypography>
      <GeneralTvGrid apiEndPointKey="TV" apiEndPoint={tvCredits} />
    </div>
  );
}
