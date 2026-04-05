import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Footer({ name }) {
  const [visits, setVisits] = useState(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const runCounter = async () => {
      try {
        const counted = sessionStorage.getItem("portfolio_visit_counted");

        if (!counted) {
          const { data, error } = await supabase.rpc(
            "increment_portfolio_visits"
          );

          if (error) throw error;

          setVisits(Number(data ?? 0));
          sessionStorage.setItem("portfolio_visit_counted", "true");
          return;
        }

        const { data, error } = await supabase
          .from("site_metrics")
          .select("count")
          .eq("key", "portfolio_visits")
          .single();

        if (error) throw error;

        setVisits(Number(data?.count ?? 0));
      } catch (error) {
        console.error("Visitor counter error:", error);
        setVisits(null);
      }
    };

    runCounter();
  }, []);

  useEffect(() => {
    if (visits === null) return;
    if (visits === 0) {
      setDisplayed(0);
      return;
    }

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
