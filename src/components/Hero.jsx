export default function Hero({ data }) {
  const roles = data.roles?.length
    ? [...data.roles, data.roles[0]]
    : [];

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-greeting">Hello, My name is</p>
        <h1 className="hero-name">{data.name}</h1>

        <div className="hero-roles hero-roles-ticker">
          <div className="hero-roles-wrapper">
            {roles.map((role, index) => (
              <p key={`${role}-${index}`}>{role}</p>
            ))}
          </div>
        </div>

        <p className="hero-intro">{data.intro}</p>
      </div>

      <div className="hero-right">
        <div className="hero-shape desktop-shape">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt={data.name}
            className="hero-image hero-image-desktop"
          />
        </div>

        <div className="hero-mobile-circle">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt={data.name}
            className="hero-image hero-image-mobile"
          />
        </div>
      </div>
    </section>
  );
}