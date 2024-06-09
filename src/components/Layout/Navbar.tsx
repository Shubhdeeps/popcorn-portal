import ProxySearchButton from "@/features/Search/ProxySearchButton";
import AppLogo from "./AppLogo";

type INavbarProps = {
  setShowModal: (state: boolean) => void;
};
export default function Navbar({ setShowModal }: INavbarProps) {
  return (
    <nav className="navbar">
      <div className="container navbar__inner-content">
        <div className="navbar__logo">
          <AppLogo />
        </div>
        <div className="navbar__search-bar">
          <ProxySearchButton setTrigger={(state) => setShowModal(state)} />
        </div>
      </div>
    </nav>
  );
}
