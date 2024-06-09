import ProxySearchButton from "@/features/Search/ProxySearchButton";
import AppLogo from "./AppLogo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner-content">
        <div className="navbar__logo">
          <AppLogo />
        </div>
        <div className="navbar__search-bar">
          <ProxySearchButton />
        </div>
      </div>
    </nav>
  );
}
