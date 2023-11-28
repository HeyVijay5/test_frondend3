import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-box">
      <h2 className="about-title">About 'Readify'</h2>
      <div className="about-data">
        <div className="about-img">
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/11/08134035/08112017_Onlinelibrary_01.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="about-text">
            Welcome to READIFY, a cutting-edge platform designed to
            revolutionize the way libraries operate and users access
            information. We are passionate about making library management more
            efficient, intuitive, and accessible for everyone.
            <br />
            <br />
            <header>Our Mission</header>

            At Readify, our mission is to empower libraries and educational
            institutions by providing a comprehensive and user-friendly solution
            for managing resources, streamlining processes, and fostering a love
            for reading and learning.
            <br />
            <br />
            Join us on this exciting journey of transforming library management.
            Whether you are a librarian, educator, or avid reader, Readify is
            here to enhance your library experience.
            <br />
            <br />
            Your suggestions for improvement are always welcome!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
