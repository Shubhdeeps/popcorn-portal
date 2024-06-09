import { APIEndpoints } from "@/utils/endpoints";
import GeneralGrid from "@/features/GeneralGrid";
import TVCard from "../Cards/TvCard";

export default function TVOnAirGrid() {
  return (
    <>
      <GeneralGrid
        RenderCard={TVCard}
        apiEndpoint={APIEndpoints.TVOnAir}
        key="tv-on-air"
      />
    </>
  );
}
