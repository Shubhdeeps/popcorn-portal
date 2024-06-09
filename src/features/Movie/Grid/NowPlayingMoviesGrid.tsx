import { APIEndpoints } from "@/utils/endpoints";
import GeneralGrid from "@/features/GeneralGrid";
import NowPlayingMovieCard from "../Cards/NowPlayingMovieCard";

export default function NowPlayingMoviesGrid() {
  return (
    <>
      <GeneralGrid
        RenderCard={NowPlayingMovieCard}
        apiEndpoint={APIEndpoints.NowPlaying}
        key="now-playing-movies"
      />
    </>
  );
}
