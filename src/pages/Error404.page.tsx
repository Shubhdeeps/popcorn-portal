import Button from "@/components/Button/button";
import DocumentHelmet from "@/components/Helmet/DocumentHelmet";
import { useNavigate } from "react-router-dom";

export default function Error404Page() {
  const navigate = useNavigate();
  return (
    <div className="error-404">
      <DocumentHelmet>Page not found</DocumentHelmet>
      <div className="error-404__uh">Uh oh..</div>
      <div className="error-404__code">404!</div>
      <div className="error-404__text">
        Looks like we've reached a dead end. This page is more lost than Dory in
        Finding Nemo!
      </div>
      <div className="error-404__button-wrapper">
        <Button onClick={() => navigate("/")}>Back to home</Button>
      </div>
    </div>
  );
}
