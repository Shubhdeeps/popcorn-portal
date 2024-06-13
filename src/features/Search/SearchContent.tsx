import TextField from "@/components/TextField/input-text-field";
import { SearchTabs, searchTabs } from "@/models/SearchTabs.model";
import { useEffect, useState } from "react";
import SearchOptionTab from "./SearchOptionTab";
import { useMediaSearch } from "@/hooks/useMediaSearch";
import SearchResultCard from "./SearchResultCard";
import { SearchModel } from "@/models/Search.model";
import { skeletonGenerator } from "@/utils/skeletonGenerator";
import { APIResponseDataModel } from "@/models/EndPoints.model";
import { useIntersectionObserver } from "@/hooks/useIntersectionOberver";
import ErrorCard from "@/components/Error/ErrorCard";

export default function SearchContent({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [activeTab, setActiveTab] = useState<SearchTabs>("all");
  const [searchText, setSearchText] = useState("");
  const { inView, ref, parentRef } = useIntersectionObserver();
  const { error, hasMore, loading, results, setScrolledToEnd } = useMediaSearch(
    searchText,
    activeTab
  );
  useEffect(() => {
    setScrolledToEnd(inView);
  }, [inView, setScrolledToEnd]);

  const array = skeletonGenerator<APIResponseDataModel["results"][number]>(
    results,
    loading
  );

  function handleSetActiveTab(newTab: SearchTabs) {
    setActiveTab(newTab);
  }

  return (
    <div className="search">
      <div className="search__textfield">
        <TextField
          role="search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
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
      <div ref={parentRef} className="search__result">
        {array.map((searchedItem) => {
          return (
            <SearchResultCard
              closeModal={closeModal}
              key={searchedItem.id}
              data={searchedItem as SearchModel}
            />
          );
        })}
        {hasMore ? (
          <div className="border-1" ref={ref} />
        ) : (
          <div>No more results</div>
        )}
      </div>
      {/* Error */}
      {Boolean(error) && <ErrorCard>{error}</ErrorCard>}
    </div>
  );
}
