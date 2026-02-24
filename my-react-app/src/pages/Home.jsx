import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import profilePic from "../assets/rubin.jpg";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="hero-wrapper">
      <h1 className="background-title">My Personal Website</h1>

      <div className="hero-card">
        <div className="hero-content">

          <div className="hero-text">
            <h3>Hello, I’m</h3>
            <h2>Rubin Shamanye Lukongo</h2>

            <p>
              Bilingual Corporate Professional specializing in Human Resources,
              timekeeping, customer service, and continuously developing
              in Information Technology.
            </p>

            <button
              className="hero-btn"
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </div>

          <div className="hero-image">
            <img
              src={profilePic}
              alt="Rubin Shamanye Lukongo"
              className="profile-img"
            />
          </div>

        </div>
      </div>
    </div>
  );
}