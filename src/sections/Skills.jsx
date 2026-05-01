import SectionTitle from "../components/SectionTitle";
import { skillsMeta } from "../data/portfolio";

function renderIcon(type) {
  switch (type) {
    case "backend":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M8 6L3 12L8 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6L21 12L16 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 4L10 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>    
      );

    case "frontend":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 20H16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );

    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6C4 4 8 3 12 3C16 3 20 4 20 6C20 8 16 9 12 9C8 9 4 8 4 6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 6V18C4 20 8 21 12 21C16 21 20 20 20 18V6"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 12C4 14 20 14 20 12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    case "devops":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M6 18H18C20 18 21 16 21 14C21 12 19 10 17 10C16 7 14 6 12 6C9 6 7 8 7 11C5 11 4 13 4 14C4 16 5 18 6 18Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );

    case "tools":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-3-3 2-2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "architecture":
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 3L3 7L12 11L21 7L12 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 17L12 21L21 17" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );

    default:
      return null;
  }
}

export default function Skills({ data }) {
  return (
    <section id="skills" className="section container">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I often work with."
      />

      <div className="skills-grid">
        {Object.entries(data.skills).map(([category, items]) => {
          const meta = skillsMeta[category];
          if (!meta) return null;

          return (
            <div key={category} className="content-card skills-card">
              <div className="skills-header">
                <div className="skills-icon">
                  {renderIcon(meta.icon) || renderIcon("tools")}
                </div>

                <div>
                  <h3 className="skills-card-title">{meta.title}</h3>
                  <h4 className="skills-card-desc">{meta.desc}</h4>
                </div>
              </div>

              <div className="skills-marquee">
                {items.map((skill, index) => (
                  <span key={index} className="skill-pill skill-float">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
