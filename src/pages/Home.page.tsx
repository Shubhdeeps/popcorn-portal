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
      <UpcomingMoviesGrid />

      <HeadlineTypography>Top rated</HeadlineTypography>
      <TopRatedMoviesGrid />

      <HeadlineTypography>On air</HeadlineTypography>
      <TVOnAirGrid />

      <HeadlineTypography>Now Playing</HeadlineTypography>
      <NowPlayingMoviesGrid />

      <HeadlineTypography>Popcorn originals</HeadlineTypography>
      <TVPopularGrid />

      <HeadlineTypography>Popular celebrities</HeadlineTypography>
      <PopularPersonGrid />
    </div>
  );
}
