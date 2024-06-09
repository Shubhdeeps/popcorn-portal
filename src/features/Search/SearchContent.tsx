import TextField from "@/components/TextField/input-text-field";
import { SearchTabs, searchTabs } from "@/models/SearchTabs.model";
import { useState } from "react";
import SearchOptionTab from "./SearchOptionTab";

export default function SearchContent() {
  const [activeTab, setActiveTab] = useState<SearchTabs>("All");

  function handleSetActiveTab(newTab: SearchTabs) {
    setActiveTab(newTab);
  }

  return (
    <div className="search">
      <div className="search__textfield">
        <TextField />
      </div>
      <div className="search__tabs">
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
      <hr />
    </div>
  );
}
