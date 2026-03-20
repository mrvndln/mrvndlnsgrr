import SectionTitle from "../components/SectionTitle";

export default function Contact({ data }) {
  const { email, mobile, github, bitbucket, location } = data.contact;

  return (
    <section id="contact" className="section container narrow">
      <SectionTitle
        title="Contact"
        subtitle="Let’s connect and build something useful."
      />

      <div className="contact-premium">
        <h3>Let’s Work Together</h3>
        <p className="contact-sub">
          Open for full-time roles, freelance projects, and collaborations.
        </p>

        <div className="contact-items">
          <a href={`mailto:${email}`} className="contact-item">
            <span className="icon">✉️</span>
            <span>{email}</span>
          </a>

          <a
            href={`tel:${mobile.replace(/\s+/g, "")}`}
            className="contact-item"
          >
            <span className="icon">📞</span>
            <span>{mobile}</span>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="icon">💻</span>
            <span>GitHub</span>
          </a>

          <a
            href={bitbucket}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="icon">📁</span>
            <span>Bitbucket</span>
          </a>

          <div className="contact-item static">
            <span className="icon">📍</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
