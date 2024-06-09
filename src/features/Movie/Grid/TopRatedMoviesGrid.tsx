import { APIEndpoints } from "@/utils/endpoints";
import PopularMovieCard from "../Cards/PopularMovieCard";
import GeneralGrid from "@/features/GeneralGrid";

export default function TopRatedMoviesGrid() {
  return (
    <>
      <GeneralGrid
        RenderCard={PopularMovieCard}
        apiEndpoint={APIEndpoints.TopRated}
        key="popular-movies"
      />
    </>
  );
}
