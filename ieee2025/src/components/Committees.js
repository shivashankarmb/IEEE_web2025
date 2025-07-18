import React from 'react';
import './Committees.css';

function Committees() {
  // Placeholder for profile images
  const profilePlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e0e0e0'/%3E%3Cpath d='M50 45c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-25c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 30c-16.569 0-30 13.431-30 30v15h60V80c0-16.569-13.431-30-30-30z' fill='%23bbb'/%3E%3C/svg%3E";

  return (
    <div className="committees">
      <div className="committees-container">
        <h1 className="page-title">Committee</h1>
        
        {/* First Line - Secretary */}
        <div className="committee-section">
          <h2 className="section-title">Secretary</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
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

        {/* Second Line - Director, ADP, Dean, DD */}
        <div className="committee-section">
          <h2 className="section-title">Director, ADP, Dean, DD</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/director-profile.jpg" 
                    alt="Director"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Prof. T J Rama Murthy</h3>
                <p className="member-title">Director, BNMIT, Bengaluru, India</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/adp-profile.jpg" 
                    alt="ADP"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. S Y Kulkarni</h3>
                <p className="member-title">Additional Director and Principal, BNMIT, Bengaluru, India</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/dean-profile.jpg" 
                    alt="Dean"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Prof. Eishwar N. Maanay</h3>
                <p className="member-title">Dean, BNMIT, Bengaluru, India</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/dd-profile.jpg" 
                    alt="DD"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. Krishnamurthy G N</h3>
                <p className="member-title">Deputy Director, BNMIT, Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Line - IEEE-PES Chair- Bangalore, HOD-EEE */}
        <div className="committee-section">
          <h2 className="section-title">IEEE-PES Chair- Bangalore, HOD-EEE</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/ieee-pes-chair-profile.jpg" 
                    alt="IEEE-PES Chair Bangalore"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [IEEE-PES Chair Name]</h3>
                <p className="member-title">IEEE-PES Chair - Bangalore</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/hod-eee-profile.jpg" 
                    alt="HOD-EEE"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [HOD Name]</h3>
                <p className="member-title">HOD-EEE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Line - IEEE Faculty Advisor, IEEE PES Hackathon coordinator */}
        <div className="committee-section">
          <h2 className="section-title">IEEE Faculty Advisor, IEEE PES Hackathon Coordinator</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/ieee-faculty-advisor-profile.jpg" 
                    alt="IEEE Faculty Advisor"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Faculty Advisor Name]</h3>
                <p className="member-title">IEEE Faculty Advisor</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/hackathon-coordinator-profile.jpg" 
                    alt="IEEE PES Hackathon Coordinator"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. [Coordinator Name]</h3>
                <p className="member-title">IEEE PES Hackathon Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Line - Students IEEE PES student chair, co-chair */}
        <div className="committee-section">
          <h2 className="section-title">Students IEEE PES Student Chair, Co-Chair</h2>
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/student-chair-profile.jpg" 
                    alt="IEEE PES Student Chair"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">[Student Chair Name]</h3>
                <p className="member-title">IEEE PES Student Chair</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src="/student-co-chair-profile.jpg" 
                    alt="IEEE PES Student Co-Chair"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">[Student Co-Chair Name]</h3>
                <p className="member-title">IEEE PES Student Co-Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committees;