export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="visit-counter-wrap">
        <span className="visit-counter-label">Visits</span>
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmrvndln.github.io%2Fmrvndlnsgrr&count_bg=%23000000&title_bg=%23000000&title=&edge_flat=true"
          alt="Visits"
        />
      </div>
      <p>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
