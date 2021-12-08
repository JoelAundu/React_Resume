import React from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className = 'colz-icon'>
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook-square"> </i>
            </a>
            <a href="https://www.google.com/">
              <i className="fa fa-google-plus-square"> </i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa fa-instagram-square"> </i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa fa-youtube-square"> </i>
            </a>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter-square"> </i>
            </a>
          </div>
          </div>
          <div className = 'profile-deails-name'>
              <span className = 'primary-text'>
                <span className = 'highlighted-text'> Joel Mosio Aundu </span>
              </span>
          </div>
          <div className = 'profile-details-role'>
              <span className = 'primary-text'>
                  <h1>
                    <Typical 
                    loop = {Infinity}
                    steps = {[
                        "Front End Engineer",
                        1500,
                        "FullStak Developer",
                        1500,
                        "Electrical Engineer",
                        1500,
                        "Web Developer",
                        1500,
                        "React Developer",
                        1500,
                    ]}
                    />
                  </h1>
                  <span className = 'profile-role-tagline'>
                  Innovative developer with robust problem solving skills. quick to learn new skills, resilient and adaptable <br/>
                  Friendly, collaborative, Analytical, proactive, organized and detailed
                  </span>
              </span>
          </div>
          <div className = 'profile-options'>
              <button className = 'btn primary-btn'>
                  Hire me
              </button>
              <a href = 'Joel Aundu Resume.pdf' download = 'Joel Aundu Resume.pdf'>
                  <button className = 'btn highlighted-btn'> Download Resume</button>
              </a>
          </div>
        </div>
        <div className = 'profile-picture'>
            <div className = 'profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
