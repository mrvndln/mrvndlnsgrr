import { useEffect, useState } from "react";

export default function Footer({ name }) {
  const [visits, setVisits] = useState(0);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const counted = sessionStorage.getItem("portfolio_visit_counted");

    const fetchVisits = counted
      ? "https://api.countapi.xyz/get/mrvndln/portfolio"
      : "https://api.countapi.xyz/hit/mrvndln/portfolio";

    fetch(fetchVisits)
      .then((res) => res.json())
      .then((data) => {
        const value = data.value ?? 0;
        setVisits(value);

        if (!counted) {
          sessionStorage.setItem("portfolio_visit_counted", "true");
        }
      })
      .catch(() => setVisits(0));
  }, []);

  useEffect(() => {
    if (visits === 0) return;

    let start = 0;
    const duration = 1200; // animation speed (ms)
    const stepTime = 16; // ~60fps
    const totalSteps = duration / stepTime;
    const increment = visits / totalSteps;

    const counter = setInterval(() => {
      start += increment;

      if (start >= visits) {
        setDisplayed(visits);
        clearInterval(counter);
      } else {
        setDisplayed(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [visits]);

  return (
    <footer className="footer">
      <div className="visit-counter-wrap">
        <span className="visit-counter-label">Visitors</span>

        <span className="visit-counter-number">
          {displayed.toLocaleString()}
        </span>
      </div>

      <p>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
