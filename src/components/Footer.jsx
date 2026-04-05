import { useEffect, useState } from "react";

export default function Footer({ name }) {
  const [visits, setVisits] = useState(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const counted = sessionStorage.getItem("portfolio_visit_counted");

    // TEMP: disable broken external counter for now
    if (!counted) {
      sessionStorage.setItem("portfolio_visit_counted", "true");
    }

    // fallback sample value so UI still works
    const fallbackValue = 128;
    setVisits(fallbackValue);
  }, []);

  useEffect(() => {
    if (visits === null) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = visits / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= visits) {
        setDisplayed(visits);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visits]);

  return (
    <footer className="footer">
      <div className="visit-counter-wrap">
        <span className="visit-counter-label">Visitors</span>
        <span className="visit-counter-number">
          {visits === null ? "Unavailable" : displayed.toLocaleString()}
        </span>
      </div>

      <p>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
