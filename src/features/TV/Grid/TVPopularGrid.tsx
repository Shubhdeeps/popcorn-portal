import { APIEndpoints } from "@/utils/endpoints";
import GeneralGrid from "@/features/GeneralGrid";
import TVCard from "../Cards/TvCard";

export default function TVPopularGrid() {
  return (
    <>
      <GeneralGrid
        RenderCard={TVCard}
        apiEndpoint={APIEndpoints.TVPopular}
        key="tv-popular"
      />
    </>
  );
}
