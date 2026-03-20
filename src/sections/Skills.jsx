import SectionTitle from "../components/SectionTitle";

export default function Skills({ data }) {
  return (
    <section id="skills" className="section container">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I often work with."
      />
      <div className="skills-wrap skills-marquee">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="skill-pill skill-animate skill-float"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
