import profilePic from "../assets/rubin.jpg";

export default function Home() {
  return (
    <div className="hero-wrapper">

      {/* Big Background Title */}
      <h1 className="background-title">My Personal Website</h1>

      {/* Main White Card */}
      <div className="hero-card">

        <div className="hero-content">

          {/* LEFT SIDE */}
          <div className="hero-text">
            <h3>Hello, I’m</h3>
            <h2>Rubin Shamanye Lukongo</h2>
            <p>
              Bilingual Corporate Professional specializing in Human Resources,
              timekeeping, customer service, and continuously developing
              in Information Technology.
            </p>

            <button className="hero-btn">Contact Me</button>
          </div>

          {/* RIGHT SIDE (Your Photo) */}
          <div className="hero-image">
            <img src={profilePic} alt="Rubin Shamanye Lukongo" />
          </div>

        </div>

      </div>

    </div>
  );
}