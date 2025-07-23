import React from 'react';
import './Committees.css';

import tjrPhoto from '../assets/TJR Sir Photo.jpg';
import adpPhoto from '../assets/ADP_BNMIT.jpg';
import deanPhoto from '../assets/Dean.jpg';
import deputyDirectorPhoto from '../assets/Dep_Director_BNMIT.webp';
import hodeeePhoto from '../assets/venkatesha_HoD_EEE.webp';
import facultyAdvisorPhoto from '../assets/Madhu_BNMIT.jpg';
import hackathonCoordinatorPhoto from '../assets/Hackathon_Coordinator.jpg'; // Placeholder for Hackathon Coordinator
import studentChairPhoto from '../assets/Student_chair.jpg';
import studentcoChairPhoto from '../assets/Student_Co_Chair.jpg';
import ieeepesPhoto from '../assets/IEEE-PES.jpg'; 
import ieeepeschairPhoto from '../assets/IEEE-PES Chair.jpg'; // Placeholder for IEEE-PES Chair Bangalore

function Committees() {
  // Placeholder for profile images
  const profilePlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e0e0e0'/%3E%3Cpath d='M50 45c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-25c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 30c-16.569 0-30 13.431-30 30v15h60V80c0-16.569-13.431-30-30-30z' fill='%23bbb'/%3E%3C/svg%3E";

  return (
    <div className="committees">
      <div className="committees-container">
        <h1 className="page-title">Committee</h1>
        {/* First Line - Secretary */}
        <div className="committee-section">
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
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={tjrPhoto} 
                    alt="Director"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Prof. T J Rama Murthy</h3>
                <p className="member-title">Director, BNMIT, Bengaluru</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={adpPhoto}
                    alt="Additional Director and Principal"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. S. Y. Kulkarni</h3>
                <p className="member-title">Additional Director and Principal, BNMIT, Bengaluru</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={deanPhoto} 
                    alt="Dean"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Prof. Eishwar. N. Maanay</h3>
                <p className="member-title">Dean and Trustee, BNMIT, Bengaluru</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={deputyDirectorPhoto} 
                    alt="Deputy Director"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. Krishnamurthy G N</h3>
                <p className="member-title">Deputy Director (Academics, Accreditation and Ranking), BNMIT, Bengaluru</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Line - IEEE-PES Chair- Bangalore, HOD-EEE */}
        <div className="committee-section">
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={ieeepeschairPhoto} 
                    alt="IEEE-PES Chair Bangalore"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. Gurunath Gurrala</h3>
                <p className="member-title">Associate Professor, Dept. of EE, IISc,<br /> Bangalore
Chair - IEEE PES Bangalore Chapter.</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={hodeeePhoto} 
                    alt="HOD-EEE"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. Venkatesha K</h3>
                <p className="member-title"> HoD, Dept. of EEE, BNMIT, Bengaluru</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Line - IEEE Faculty Advisor, IEEE PES Hackathon coordinator */}
        <div className="committee-section">
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={facultyAdvisorPhoto} 
                    alt="IEEE Faculty Advisor"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. Madhu S</h3>
                <p className="member-title">Associate Professor, Dept. of EEE, BNMIT
Faculty Advisor, BNMIT IEEE PES Student Chapter</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={hackathonCoordinatorPhoto}
                    alt="IEEE PES Hackathon Coordinator"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Punith Kumar S M</h3>
                <p className="member-title">
                  Execom Member,IEEE PES Bangalore Chapter,
                  Greaves Electric Mobility<br/> (IEEE PES Hackathon coordinator)
                </p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={ieeepesPhoto} 
                    alt="IEEE-PES Chair Bangalore"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Saptarshi Pani</h3>
                <p className="member-title">Analog Design Engineer, Texas Instrumenys and Execom Member, IEEE Bangalore Section PES</p>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Fifth Line - Students IEEE PES student chair, co-chair */}
        <div className="committee-section">
          <div className="committee-grid">
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={studentChairPhoto}
                    alt="IEEE PES Student Chair"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Deekshitha K</h3>
                <p className="member-title">IEEE BNMIT Student Chair</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={studentcoChairPhoto} 
                    alt="IEEE PES Student Co-Chair"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Shaswatha Varadhan</h3>
                <p className="member-title">IEEE BNMIT Student Co-Chair</p>
              </div>
            </div>
          </div>
        </div>
       {/* IEEE Members Table Section */}
        <div className="ieee-members-section">
          <h2 className="ieee-members-title">IEEE Members</h2>
          <div className="ieee-members-table-container">
            <table className="ieee-members-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Semester & Branch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aditi R Prasad</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Gowri A S</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Sanjana Sulibhavi</td>
                  <td>7th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Shreelakshmi P</td>
                  <td>7th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Nimisha T</td>
                  <td>7th sem EEE</td>
                </tr>
                <tr>
                  <td>Revanth BV</td>
                  <td>7th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Sai Rashmi B J</td>
                  <td>7th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Sanjana Alladwar</td>
                  <td>7th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Ajay KC</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Darshan Gowda S</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Gagan Kumar Reddy</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Jeevan C S</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Sowmya.m.kumarji</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Shreya G Kulkarni</td>
                  <td>5th sem EEE</td>
                </tr>
                <tr>                  
                  <td>Sinchana R M</td>
                  <td>5th sem EEE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committees;