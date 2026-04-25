import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Looks like this campaign got lost in transit.
        </p>
        <button 
          onClick={() => navigate("/")}
          className="not-found-button"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
