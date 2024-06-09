import TextField from "@/components/TextField/input-text-field";
import { SearchTabs, searchTabs } from "@/models/SearchTabs.model";
import { useState } from "react";
import SearchOptionTab from "./SearchOptionTab";
import SearchResultCard from "./SearchResultCard";
import { SearchModel } from "@/models/Search.model";

const dumm: SearchModel = {
  media_type: "tv",
  adult: false,
  backdrop_path: "/pkHOVTeH0BlsSk8GacfdmmnXtIR.jpg",
  genre_ids: [16, 10759, 35, 80],
  id: 138112,
  origin_country: ["JP"],
  original_language: "ja",
  original_name: "Bad Boys",
  overview:
    "Tsukasa, Yoji, and Eiji are friends and members of the motorcycle gang called the Paradise Butterflies. Riding the streets of Hiroshima, their goal in life is to top all other gangs in their city.",
  popularity: 25.393,
  poster_path: "/6SsL6sR3AFDsa4Eg8tsr3TsMvVz.jpg",
  first_air_date: "1993-09-25",
  name: "Bad Boys",
  vote_average: 0,
  vote_count: 0,
};

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
      <div className="search__result">
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
        <SearchResultCard data={dumm} />
      </div>
    </div>
  );
}
