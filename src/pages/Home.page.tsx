import HeadlineTypography from "@/components/Typography/headline-typography";
import NowPlayingMoviesGrid from "@/features/Movie/Grid/NowPlayingMoviesGrid";
import TopRatedMoviesGrid from "@/features/Movie/Grid/TopRatedMoviesGrid";
import UpcomingMoviesGrid from "@/features/Movie/Grid/UpcomingMoviesGrid";
import PopularPersonGrid from "@/features/People/Grid/PopularPersonGrid";
import TVOnAirGrid from "@/features/TV/Grid/TVOnAirGrid";
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
      <TVOnAirGrid />

      <br />
      <HeadlineTypography>In Cinema</HeadlineTypography>
      <NowPlayingMoviesGrid />

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
