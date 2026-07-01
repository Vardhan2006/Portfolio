import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="fire-bg"></div>

      <div className="hero-left">

        <p className="hero-small">
          SOFTWARE ENGINEER
        </p>

        <h1 className="hero-title">
          SAI
          <br />
          VARDHAN
          <br />
          KAREKA
        </h1>

        <p className="hero-description">
          Computer Science undergraduate focused on
          building scalable web applications,
          contributing to open source,
          and developing modern AI-powered products.
        </p>

        <div className="hero-buttons">
          <button>
            View Projects
          </button>

          <button className="secondary">
            Resume
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="profile-card">

          <h2>
            SOFTWARE ENGINEER
          </h2>

          <div className="stat">
            <span>Experience</span>
            <span>1+ Years</span>
          </div>

          <div className="stat">
            <span>Projects</span>
            <span>5+</span>
          </div>

          <div className="stat">
            <span>Open Source</span>
            <span>Active</span>
          </div>

          <div className="stat">
            <span>Location</span>
            <span>India</span>
          </div>

        </div>

      </div>

    </section>
  );
}