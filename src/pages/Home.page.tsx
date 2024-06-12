import HeadlineTypography from "@/components/Typography/headline-typography";
import GeneralMoviesGrid from "@/features/Movie/Grid/GeneralMoviesGrid";
import TopRatedMoviesGrid from "@/features/Movie/Grid/TopRatedMoviesGrid";
import UpcomingMoviesGrid from "@/features/Movie/Grid/UpcomingMoviesGrid";
import PopularPersonGrid from "@/features/People/Grid/PopularPersonGrid";
import GeneralTvGrid from "@/features/TV/Grid/GeneralTvGrid";
import TVPopularGrid from "@/features/TV/Grid/TVPopularGrid";

export default function HomePage() {
  return (
    <div className="home-page">
      <br />
      <br />
      <UpcomingMoviesGrid />
      <br />
      <HeadlineTypography>Top rated</HeadlineTypography>
      <TopRatedMoviesGrid />
      <br />

      <HeadlineTypography>On air</HeadlineTypography>
      <GeneralTvGrid apiEndPointKey="TVOnAir" />

      <br />
      <HeadlineTypography>In Cinema</HeadlineTypography>
      <GeneralMoviesGrid />

      <br />
      <HeadlineTypography>Popcorn originals</HeadlineTypography>
      <TVPopularGrid />
      <br />

      <HeadlineTypography>Popular celebrities</HeadlineTypography>
      <PopularPersonGrid />
      <br />
    </div>
  );
}
