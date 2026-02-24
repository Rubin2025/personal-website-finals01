import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import profilePic from "../assets/rubin.jpg";
import "./Home.css";

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
      
      {/* Background Title */}
      <h1 className="background-title">My Personal Website</h1>

      {/* Main Card */}
      <div className="hero-card">
        <div className="hero-content">

          {/* LEFT SIDE */}
          <div className="hero-text">
            <h3 className="fade-in">Hello, I’m</h3>
            <h2 className="fade-in delay-1">
              Rubin Shamanye Lukongo
            </h2>

            <p className="fade-in delay-2">
              Bilingual Corporate Professional specializing in Human Resources,
              timekeeping, customer service, and continuously developing
              in Information Technology.
            </p>

            <button
              className="hero-btn fade-in delay-3"
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-image fade-in delay-2">
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