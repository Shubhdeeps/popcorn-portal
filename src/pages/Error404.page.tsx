import Button from "@/components/Button/button";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Error404Page() {
  const navigate = useNavigate();
  return (
    <div className="error-404">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error 404</title>
      </Helmet>
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
