import React from 'react';
import './Committees.css';

import chairmanPhoto from '../assets/Chairman.webp';
import tjrPhoto from '../assets/TJR Sir Photo.webp';
import adpPhoto from '../assets/ADP_BNMIT.webp';
import deanPhoto from '../assets/Dean.webp';
import deputyDirectorPhoto from '../assets/Dep_Director_BNMIT.webp';
import hodeeePhoto from '../assets/venkatesha_HoD_EEE.webp';
import facultyAdvisorPhoto from '../assets/Madhu_BNMIT.webp';
import hackathonCoordinatorPhoto from '../assets/Hackathon_Coordinator.webp'; // Placeholder for Hackathon Coordinator
import studentChairPhoto from '../assets/Student_chair.webp';
import studentcoChairPhoto from '../assets/Student_Co_Chair.webp';
import ieeepesPhoto from '../assets/IEEE-PES.webp'; 
import ieeepeschairPhoto from '../assets/IEEE-PES Chair.webp'; // Placeholder for IEEE-PES Chair Bangalore
import StaffCoordinatorPhoto from '../assets/StaffCoordinator.jpg'; // Placeholder for Staff Coordinator

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
                    src={chairmanPhoto}
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
                    alt="IEEE PES Hackathon Coordinator"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Mr. Punith Kumar S M</h3>
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
                    loading="lazy"
                    alt="IEEE-PES Chair Bangalore"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Mr. Saptarshi Pani</h3>
                <p className="member-title">Analog Design Engineer, Texas Instrumenys and Execom Member, IEEE Bangalore Section PES</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={StaffCoordinatorPhoto} 
                    loading="lazy"
                    alt="IEEE-PES Chair Bangalore"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Dr. Priyashree S</h3>
                <p className="member-title">Staff coordinator<br/>Associate Professor, Dept. of EEE, BNMIT</p>
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
                    loading="lazy"
                    alt="IEEE PES Student Chair"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Deekshitha K</h3>
                <p className="member-title">IEEE PES BNMIT Student Chair</p>
              </div>
            </div>
            <div className="committee-card">
              <div className="card-tech-border"></div>
              <div className="card-header">
                <div className="profile-image">
                  <img 
                    src={studentcoChairPhoto} 
                    loading="lazy"
                    alt="IEEE PES Student Co-Chair"
                    onError={(e) => {
                      e.target.src = profilePlaceholder;
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="member-name">Shaswatha Varadhan</h3>
                <p className="member-title">IEEE PES BNMIT Student Co-Chair</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ieee-members-section">
          <h2 className="ieee-members-title">Faculty</h2>
          <div className="ieee-members-table-container">
            <table className="ieee-members-table">
              <thead>
                <tr>
                  <th>Faculty Name</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Venkatesha K</td>
                  <td>Professor & HOD</td>
                </tr>
                <tr>                  
                  <td>Dr. V Muralidhara</td>
                  <td>Professor</td>
                </tr>
                <tr>                  
                  <td>Dr. A Kumar</td>
                  <td>Professor</td>
                </tr>
                <tr>                  
                  <td>Dr. Priyashree S</td>
                  <td>Associate Professor</td>
                </tr>
                <tr>                  
                  <td>Dr. Madhu S</td>
                  <td>Associate Professor</td>
                </tr>
                <tr>
                  <td>Dr. Shubha Rao K</td>
                  <td>Associate Professor</td>
                </tr>
                <tr>                  
                  <td>Dr. Champa P N</td>
                  <td>Associate Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Ashwini A</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Kruthi Jayaram</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Karanam Vasudha</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Sri. Sujith T</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Raksha S</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Shruti V Joshi</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Pankaja H G</td>
                  <td>Assistant Professor</td>
                </tr>
                <tr>                  
                  <td>Smt. Kurva Swetha</td>
                  <td>Assistant Professor</td>
                </tr>
              </tbody>
            </table>
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