import { tabTypeAndIcon } from "@/assets/TabIcons";
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
      className={`uppercase search__tab ${activeClx}`}
    >
      {tabTypeAndIcon[type](activeClx)} {type}
    </span>
  );
}
