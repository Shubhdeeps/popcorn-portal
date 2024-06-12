import { useNavigate } from "react-router-dom";

export default function AppLogo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="app-logo">
      <span>Popcorn</span>
      <span className="app-logo__semi-header">Portal</span>
    </div>
  );
}
