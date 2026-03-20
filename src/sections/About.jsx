import SectionTitle from "../components/SectionTitle";

export default function About({ data }) {
  return (
    <section id="about" className="section container narrow">
      <SectionTitle
        title="About"
        subtitle="A quick overview of who I am and what I do."
      />
      <div className="content-card">
        <p>{data.about}</p>
      </div>
    </section>
  );
}
