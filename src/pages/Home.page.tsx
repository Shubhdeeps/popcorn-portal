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
      <UpcomingMoviesGrid contentId="Home-upcoming" />
      <br />
      <HeadlineTypography>Top rated</HeadlineTypography>
      <TopRatedMoviesGrid contentId="Home-top-rated" />
      <br />

      <HeadlineTypography>On air</HeadlineTypography>
      <GeneralTvGrid contentId="Home-tv-on-air" apiEndPointKey="TVOnAir" />

      <br />
      <HeadlineTypography>In Cinema</HeadlineTypography>
      <GeneralMoviesGrid contentId="home" />

      <br />
      <HeadlineTypography>Popcorn originals</HeadlineTypography>
      <TVPopularGrid contentId="Home-tv-popular" />
      <br />

      <HeadlineTypography>Popular celebrities</HeadlineTypography>
      <PopularPersonGrid contentId="Home-person" apiKey="PeoplePopular" />
      <br />
    </div>
  );
}
