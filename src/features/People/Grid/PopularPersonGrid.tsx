import { APIEndpoints } from "@/utils/endpoints";
import GeneralGrid from "@/features/GeneralGrid";
import PersonCard from "../Cards/PersonCard";

export default function PopularPersonGrid() {
  return (
    <>
      <GeneralGrid
        RenderCard={PersonCard}
        apiEndpoint={APIEndpoints.PeoplePopular}
        key="person-popular"
      />
    </>
  );
}
