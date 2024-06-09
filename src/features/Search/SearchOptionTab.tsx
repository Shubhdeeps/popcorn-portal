import { movieSVG, personSVG, tvSVG } from "@/assets/TabIcons";
import { SearchTabs } from "@/models/SearchTabs.model";

const tabTypeAndIcon: Record<SearchTabs, (str: string) => JSX.Element | null> =
  {
    All: () => null,
    TV: tvSVG,
    Movie: movieSVG,
    People: personSVG,
  };
export default function SearchOptionTab({
  type,
  isActive,
  handleSetActiveTab,
}: {
  type: SearchTabs;
  isActive: boolean;
  handleSetActiveTab: (tab: SearchTabs) => void;
}) {
  const activeClx = isActive ? "search__tab-active" : "";
  return (
    <span
      onClick={() => handleSetActiveTab(type)}
      className={`search__tab ${activeClx}`}
    >
      {tabTypeAndIcon[type](activeClx)} {type}
    </span>
  );
}
