import React from 'react';
import './Committees.css';

function Committees() {
  // Placeholder for profile images
  const profilePlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e0e0e0'/%3E%3Cpath d='M50 45c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-25c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 30c-16.569 0-30 13.431-30 30v15h60V80c0-16.569-13.431-30-30-30z' fill='%23bbb'/%3E%3C/svg%3E";

  return (
    <div className="committees">
      <div className="committees-container">
        <h1 className="page-title">Committee</h1>
        
        <div className="committee-section">
          <h2 className="section-title">Chief Patron</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/narayan-rao-profile.jpg" 
                    alt="Sri. Narayan Rao R. Maanay"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Sri. Narayan Rao R. Maanay</h3>
                <p className="member-title">Chairman, Governing Body, BNM Institute of Technology, Bengaluru</p>
              </div>
            </div>
          </div>
        </div>

        <div className="committee-section">
          <h2 className="section-title">Chief Mentor</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/chief-mentor-profile.jpg" 
                    alt="Chief Mentor"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Chief Mentor, BNM Institute of Technology, Bengaluru</p>
              </div>
            </div>
          </div>
        </div>

        <div className="committee-section">
          <h2 className="section-title">Conference Chairs</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/conference-chair-1.jpg" 
                    alt="Conference Chair 1"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Conference Chair</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/conference-chair-2.jpg" 
                    alt="Conference Chair 2"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Conference Chair</p>
              </div>
            </div>
          </div>
        </div>

        <div className="committee-section">
          <h2 className="section-title">Technical Program Committee</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/tpc-chair-1.jpg" 
                    alt="TPC Member 1"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Technical Program Chair</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/tpc-chair-2.jpg" 
                    alt="TPC Member 2"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Technical Program Co-Chair</p>
              </div>
            </div>
          </div>
        </div>

        <div className="committee-section">
          <h2 className="section-title">Organizing Committee</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/organizing-chair-1.jpg" 
                    alt="Organizing Member 1"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Organizing Chair</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/organizing-chair-2.jpg" 
                    alt="Organizing Member 2"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Name]</h3>
                <p className="member-title">Organizing Co-Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committees;
