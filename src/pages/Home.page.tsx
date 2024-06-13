import DocumentHelmet from "@/components/Helmet/DocumentHelmet";
import HeadlineTypography from "@/components/Typography/headline-typography";
import FavoriteGrid from "@/features/Favorites/FavoriteGrid";
import GeneralMoviesGrid from "@/features/Movie/Grid/GeneralMoviesGrid";
import TopRatedMoviesGrid from "@/features/Movie/Grid/TopRatedMoviesGrid";
import UpcomingMoviesGrid from "@/features/Movie/Grid/UpcomingMoviesGrid";
import PopularPersonGrid from "@/features/People/Grid/PopularPersonGrid";
import GeneralTvGrid from "@/features/TV/Grid/GeneralTvGrid";
import TVPopularGrid from "@/features/TV/Grid/TVPopularGrid";

export default function HomePage() {
  return (
    <div className="home-page">
      <DocumentHelmet>Dashboard | Popcorn Portal</DocumentHelmet>
      <UpcomingMoviesGrid contentId="Home-upcoming" />

      <HeadlineTypography>Top rated</HeadlineTypography>
      <TopRatedMoviesGrid contentId="Home-top-rated" />

      <HeadlineTypography>On air</HeadlineTypography>
      <GeneralTvGrid contentId="Home-tv-on-air" apiEndPointKey="TVOnAir" />

      <HeadlineTypography>In Cinema</HeadlineTypography>
      <GeneralMoviesGrid contentId="home" />

      <HeadlineTypography>Popcorn originals</HeadlineTypography>
      <TVPopularGrid contentId="Home-tv-popular" />

      <HeadlineTypography>Popular celebrities</HeadlineTypography>
      <PopularPersonGrid contentId="Home-person" apiKey="PeoplePopular" />

      <HeadlineTypography>Favorites</HeadlineTypography>
      <FavoriteGrid />
    </div>
  );
}
