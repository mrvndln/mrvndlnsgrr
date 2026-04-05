import { useEffect, useState } from "react";

export default function Footer({ name }) {
  const [visits, setVisits] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const counted = sessionStorage.getItem("portfolio_visit_counted");

    const endpoint = counted
      ? "https://api.countapi.xyz/get/mrvndln/portfolio"
      : "https://api.countapi.xyz/hit/mrvndln/portfolio";

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`CountAPI request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const value = data?.value ?? 0;
        setVisits(value);
        setError(false);

        if (!counted) {
          sessionStorage.setItem("portfolio_visit_counted", "true");
        }
      })
      .catch((err) => {
        console.error("Visitor counter error:", err);
        setError(true);
      });
  }, []);

  return (
    <footer className="footer">
      <div className="visit-counter-wrap">
        <span className="visit-counter-label">Visitors</span>

        <span className="visit-counter-number">
          {error
            ? "Unavailable"
            : visits === null
            ? "Loading..."
            : visits.toLocaleString()}
        </span>
      </div>

      <p>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
