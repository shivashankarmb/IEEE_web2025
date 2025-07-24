import React, { useState } from 'react';
import './For Participants.css';
import { IoIosPaper } from 'react-icons/io'; // for guidelines icon

function ForParticipants() {
  const [showGuidelines, setShowGuidelines] = useState(false);

  const toggleGuidelines = () => {
    setShowGuidelines(!showGuidelines);
  };

  return (
    <div className="participants">
      <div className="participants-container">
        <h1 className="page-title">For Participants</h1>

        <div className="button-row">
          <div className="content-section">
            <h2 className="section-title">Poster IEEE Electrothon-2025</h2>
            <a
              href="https://raw.githubusercontent.com/shivashankarmb/IEEE_web2025/main/ieee2025/public/poster.pdf"
              className="action-button"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Click to Download POSTER
            </a>
          </div>

          <div className="content-section">
            <h2 className="section-title">Registration Link for IEEE Electrothon-2025</h2>
            <a
              href="https://docs.google.com/forms/d/15uRKUb0ZzfKYWFJhVHmIdLjJvOQXgXnzMX3AEnB3u-g/edit?pli=1"
              className="action-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to REGISTER
            </a>
          </div>

          <div className="content-section">
            <h2 className="section-title">Abstract Submission for IEEE Electrothon-2025</h2>
            <a
              href="https://docs.google.com/document/d/1ojqF92N3CXGRNmXVpcasnNpNZsicgxHZ/edit"
              className="action-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click for ABSTRACT TEMPLATE
            </a>
          </div>
        </div>

        <div className="guidelines-section">
          <h2 className="section-title" style={{ cursor: 'pointer' }} onClick={toggleGuidelines}>
            <IoIosPaper className="icon" />
            <span> Click here to view the guidelines for the participants.</span>
          </h2>

          {showGuidelines && (
            <div className="content-section">
          <h2 className="section-title">🔧 Electrothon 2025 – Participant Guidelines 🔧</h2>
          <p className="center-text"><em>An Exclusive National-Level Hardware Hackathon</em></p>
          <p className="center-text">
            Welcome to Electrothon 2025, a premier event designed to challenge and inspire innovation in embedded systems, electronics, and hardware development.
            Kindly adhere to the following carefully curated guidelines to ensure a seamless and competitive experience.
          </p>

          <h3 className="sub-section-title">🔹 General Information:</h3>
          <ul className="guidelines-list">
            <li><strong>Electrothon 2025 is strictly a Hardware Hackathon.</strong></li>
            <li><strong>Hardware Focus:</strong> Electrothon 2025 is exclusively dedicated to HARDWARE INNOVATION. While software may be leveraged for programming and coding aspects, the core of your project must be a tangible hardware solution.</li>
            <li>Open to budding engineers and technologists pursuing B.E, B.Tech, M.Tech, and MCA programs.</li>
          </ul>

          <h3 className="sub-section-title">👥 Team Composition:</h3>
          <ul className="guidelines-list">
            <li>Teams must comprise a minimum of 3 and a maximum of 4 members.</li>
            <li>Each participant is allowed to be part of only one team.</li>
            <li>Only one registration form per team must be submitted.</li>
            <li>Each eligible individual may lend their talents to only one team, which may lead to team disqualification.</li>
          </ul>

          <h3 className="sub-section-title">🧠 Hackathon Structure:</h3>
          <ul className="guidelines-list">
            <li><strong>First Round (Online Screening):</strong> Your journey commences with the submission of your innovative concept. Teams are required to complete and submit the provided template on or before August 15th, 2025.</li>
            <li><strong>Second Round (Offline – At BNMIT, Bengaluru):</strong> Shortlisted teams will advance to the exciting offline round held at BNMIT. The final registration deadline for this round is August 25th, 2025.</li>
            <li>Registration fee is applicable exclusively to teams successfully shortlisted for the hackathon.</li>
          </ul>

          <h3 className="sub-section-title">⚠ Important Regulations:</h3>
          <ul className="guidelines-list">
            <li><strong>On-Site Prototyping Mandate:</strong> To ensure a level playing field and truly assess your on-the-spot ingenuity, teams are strictly prohibited from bringing pre-built prototypes or models to Electrothon 2025.</li>
            <li>Pre-built prototypes/models are strictly not allowed.</li>
            <li>Shortlisted teams are expected to conceptualize and build their hardware prototypes on-site, within the allotted timeframe on the event day.</li>
            <li><strong>Intellectual Property:</strong> All intellectual property generated during the hackathon will remain with the participating teams. However, by participating, teams grant Electrothon 2025 the right to showcase their projects for promotional purposes.</li>
            <li><strong>Essential Facilities:</strong> Internet access, workspace, and meals (breakfast, lunch, and refreshments) will be provided, to facilitate your creative endeavors.</li>
            <li><strong>Component Accountability:</strong> The responsibility of procuring all necessary components and materials for the development of your prototype during Electrothon 2025 rests solely with the participating teams. We encourage thorough preparation in this regard.</li>
            <li>Accommodation can be arranged upon prior request.</li>
            <li><strong>Code of Conduct:</strong> Participants are expected to uphold a high standard of professionalism, respect, and sportsmanship throughout the event.</li>
          </ul>

          <p className="center-text">
            Prepare to innovate, collaborate, and compete with the best minds from across the nation.
            <br />
            <strong>Let the sparks of creativity fly at Electrothon 2025! ⚡</strong>
          </p>

          <p className="center-text">
            We eagerly anticipate witnessing your ingenious contributions to Electrothon 2025.
            Should you require any further clarification, please do not hesitate to reach out.
          </p>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForParticipants;