import { searchSVG } from "@/assets/SearchIcon.svg";
import React, { useEffect } from "react";

type IProxySearchProps = {
  setTrigger: () => void;
};
export default function ProxySearchButton() {
  useEffect(() => {
    function handleSearchKeydown(e: KeyboardEvent) {
      if (e.key === "/") {
        console.log(e.key);
      }
    }
    window.addEventListener("keydown", handleSearchKeydown);
    return () => {
      window.removeEventListener("keydown", handleSearchKeydown);
    };
  }, []);
  return (
    <div className="proxy-search-button">
      {searchSVG}
      <span>search</span>
      <span className="proxy-search-button__search-character"> / </span>
    </div>
  );
}
