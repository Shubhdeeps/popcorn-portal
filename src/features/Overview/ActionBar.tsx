import { closeSVG } from "@/assets/CloseIcon";
import { shareSVG } from "@/assets/ShareIcon";
import Dropdown from "@/components/Dropdown/dropdown";

export default function ActionBar() {
  return (
    <div className="overview-action-bar">
      <span className="overview-action-bar__button">{closeSVG} Close</span>
      <Dropdown
        items={[
          <li className="overview-action-bar__button">Copy link</li>,
          <li className="overview-action-bar__button">Facebook</li>,
        ]}
        icon={shareSVG}
      />
    </div>
  );
}
