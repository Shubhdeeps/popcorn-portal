import { SearchTabs } from "@/models/SearchTabs.model";

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
      {type}
    </span>
  );
}
