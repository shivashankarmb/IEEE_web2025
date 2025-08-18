
import React, { useState } from 'react';
import './Round2Teams.css';

const selectedTeams = [
  { team: "She Builds", member: "Misba Saleha", college: "Vidyavardhaka College of Engineering, Gokulam 3rd stage, Mysore" },
  { team: "INNOVAT'her", member: "DIVYASHREE K", college: "Maharaja Institute of Technology Thandavapura, Mysuru,Karnataka" },
  { team: "Ecodynamos", member: "AKHILA KURUVA", college: "Dayananda Sagar Academy of Technology and Management Kanakapura Main Road, Udayapura, Opp. Art of Living, Bangalore 560 082, Karnataka, India." },
  { team: "Team RedAnts", member: "Sreekar S Vasist", college: "BNM Institute of Technology" },
  { team: "Tricolor Titans", member: "Nirupam Singh", college: "BMS College of Engineering" },
  { team: "Circuit Breakers", member: "E Ganesh", college: "Reva university bangalore kattigenahalli" },
  { team: "Eco power", member: "Jeevan c s", college: "BNM Institute of Technology" },
  { team: "Surya Pradhan", member: "Ashoka B", college: "Siddaganga institute of technology (SIT), Tumkur" },
  { team: "Logic Legion", member: "Gourav.S", college: "Maharaja Institute of Technology Thandavapura" },
  { team: "ROOTED RESOLVE", member: "Abhishek A Reddy", college: "BNMIT 27th cross, 12 th main, 2nd stage Banashankari" },
  { team: "Nexora", member: "Gagan B D", college: "HKBK COLLEGE OF ENGINEERING,Nagawara ,Bengaluru 560045" },
  { team: "Syntax Error", member: "Abhijith U", college: "Providence college of engineering. chengannur alappuzha" },
  { team: "CropIQ", member: "Abish Paul", college: "Christ University Kengeri , Mysore road, Kengeri, Kumbalgodu, Bangalore , Karnataka , 560074" },
  { team: "Skyrelief", member: "om shukla", college: "BMS Instittue of Technology" },
  { team: "Highfly", member: "Rakshith Gowda G", college: "SSIT, Tumkur" },
  { team: "BRAINWARE", member: "Akshay Simha H", college: "RNSIT, RR NAGAR" },
  { team: "Spandana", member: "H N Rashmitha", college: "National Institute Of Engineering" },
  { team: "FUTURE FORGE", member: "SHRADDHA SHETTY G.R", college: "BNM Institute of Technology" },
  { team: "PERCEP-A-TRON", member: "RAAMNATH K", college: "Dayananda Sagar College of Engineering" },
  { team: "FutureGeeks", member: "Shyma PH", college: "PA college of engineering , mangalore" },
  { team: "Circuit Miners", member: "Nandan M N", college: "B.M.S. College of Engineering" },
  { team: "RES", member: "Shashank T S", college: "Dayananda sagar college of engineering" },
  { team: "PlasTrack", member: "Daksha Mali Patil", college: "BNM Institute of Technology" },
  { team: "Abhyuday", member: "Shraddha", college: "Dayananda Sagar College of Engineering, Shavige Malleshwara Hills, Kumarswamy layout Bangalore" },
  { team: "DriveVolt", member: "TANISHA PATNAIK", college: "Kalinga Institute of Industrial Technology (KIIT), KIIT Rd, Patia, Bhubaneswar, Odisha 751024" },
  { team: "Yaatri", member: "Lahari C Gopal", college: "Bangalore institute of technology, v.v puram" },
  { team: "4 Phase", member: "Dhruva A Shetty", college: "RNS IT, JSS ATE" },
  { team: "DripStop Crew", member: "Srijan Shivakumar Kakhandaki", college: "CMR Institute Of Technology, AECS Layout, Bangalore - 560037" },
  { team: "ECOFRESH", member: "Vinutha M", college: "Vidyavardaka College of Engineering, Mysore-570002" },
  { team: "HKBK", member: "Fawaz Ur Rahman", college: "HKBK College of Engineering 22/1, opposite Manyata Tech Park Road, Vyalikaval Society, Govindapura, Nagawara, Bengaluru, Karnataka 560045" },
  { team: "Mitians", member: "Anuraj", college: "Maharaja Institute of Technology" },
  { team: "ElecTrump", member: "Pranav G", college: "DSCE, Kumaraswamy Layout, Bengaluru, Karnataka 560111" },
  { team: "Navisecure", member: "Jayalakshmi Jhansi M N", college: "Presidency University, Itgalpura, Rajanukunte, Yelahanka, Bengaluru - 560064" },
  { team: "Relay Menders", member: "Mervin A", college: "Christ University Kengeri Campus" },
  { team: "Problem Solvers", member: "Shashank A", college: "New Horizon college of engineering" }
];

function Round2Teams() {
  const registerLink = "https://forms.gle/Um7k7b1yYHhDiije8";
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="round2-container">
      {/* Title above line */}
      <h2 className="round2-title">2nd Round Registration And Guidelines</h2>
      <hr className="divider" />

      <div className="round2-buttons-row">
        <a href={registerLink} target="_blank" rel="noopener noreferrer">
          <button className="register-btn">Click to REGISTER</button>
        </a>
        <button className="register-btn" onClick={() => setShowTable(!showTable)} style={{marginLeft: '20px'}}>
          Selected Teams
        </button>
      </div>

      {/* Show congratulatory message and table together when button is clicked */}
      {showTable && (
        <div className="round2-table-wrapper congratulatory-table">
          <div className="round2-message congratulatory" style={{marginBottom: '1.2rem'}}>
            <span role="img" aria-label="trophy" style={{fontSize: '1.5em', marginRight: '8px'}}>🏆</span>
            <span>
              Congratulations for the following 35 teams for being selected for ROUND-2. Notification has been sent to your mails. Do the registration on or before 20th August 2025 before 5 PM. If any team is not completing the registration before the deadline, the waitlisted teams get the opportunity for the registration.
            </span>
          </div>
          <div className="round2-table-title">
            <span role="img" aria-label="confetti" style={{fontSize: '1.3em', marginRight: '6px'}}>🎉</span>
            Selected Teams for Round-2
            <span role="img" aria-label="confetti" style={{fontSize: '1.3em', marginLeft: '6px'}}>🎉</span>
          </div>
          <table className="round2-table ieee-members-table congratulatory-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Team Member-1</th>
                <th>College Name</th>
              </tr>
            </thead>
            <tbody>
              {selectedTeams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.team}</td>
                  <td>{team.member}</td>
                  <td>{team.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Round2Teams;
