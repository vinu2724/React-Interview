import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Us</h1>
        <p>
          Discover our journey, values, and the mission that drives us forward.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We strive to create innovative solutions that empower individuals and
          businesses worldwide. Our dedication to quality and excellence drives
          everything we do.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Team Member"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Team Member"
            />
            <h3>Jane Smith</h3>
            <p>Chief Designer</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Team Member"
            />
            <h3>Michael Brown</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
