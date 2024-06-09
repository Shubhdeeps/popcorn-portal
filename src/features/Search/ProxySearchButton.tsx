import { searchSVG } from "@/assets/SearchIcon.svg";
import { useEffect } from "react";

type IProxySearchProps = {
  setTrigger: (state: boolean) => void;
};
export default function ProxySearchButton({ setTrigger }: IProxySearchProps) {
  useEffect(() => {
    function handleSearchKeydown(e: KeyboardEvent) {
      if (e.key === "/") {
        setTrigger(true);
      }
      if (e.key === "Escape") {
        setTrigger(false);
      }
    }
    window.addEventListener("keydown", handleSearchKeydown);
    return () => {
      window.removeEventListener("keydown", handleSearchKeydown);
    };
  }, []);
  return (
    <div onClick={() => setTrigger(true)} className="proxy-search-button">
      {searchSVG}
      <span>search</span>
      <span className="proxy-search-button__search-character"> / </span>
    </div>
  );
}
