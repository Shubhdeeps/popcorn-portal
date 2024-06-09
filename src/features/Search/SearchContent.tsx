import TextField from "@/components/TextField/input-text-field";
import { SearchTabs, searchTabs } from "@/models/SearchTabs.model";
import { useState } from "react";
import SearchOptionTab from "./SearchOptionTab";
import SearchResultCard from "./SearchResultCard";

export default function SearchContent() {
  const [activeTab, setActiveTab] = useState<SearchTabs>("all");

  function handleSetActiveTab(newTab: SearchTabs) {
    setActiveTab(newTab);
  }

  return (
    <div className="search">
      <div className="search__textfield">
        <TextField />
      </div>
      <div className="search__tabs">
        <div className="search__tabs-wrapper">
          {searchTabs.map((searchTab) => {
            return (
              <SearchOptionTab
                key={searchTab}
                handleSetActiveTab={handleSetActiveTab}
                isActive={activeTab === searchTab}
                type={searchTab}
              />
            );
          })}
        </div>
      </div>
      <hr />
      <div className="search__result"></div>
    </div>
  );
}
