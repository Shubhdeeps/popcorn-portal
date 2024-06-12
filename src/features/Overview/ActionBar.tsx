import { backSVG } from "@/assets/BackIcon";
import { shareSVG } from "@/assets/ShareIcon";
import Dropdown from "@/components/Dropdown/dropdown";
import { useNavigate } from "react-router-dom";

export default function ActionBar() {
  const navigate = useNavigate();
  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <div className="overview-action-bar">
      <span
        onClick={() => navigate(-1)}
        className="overview-action-bar__button"
      >
        {backSVG} Back
      </span>
      <Dropdown
        items={[
          <li onClick={handleCopyLink} className="overview-action-bar__button">
            Copy link
          </li>,
        ]}
        icon={shareSVG}
      />
    </div>
  );
}
