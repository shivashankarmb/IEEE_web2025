import React, { useState } from "react";
import "./Round2Teams.css";

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
  const nocLink = "https://raw.githubusercontent.com/shivashankarmb/IEEE_web2025/main/ieee2025/src/assets/NO%20OBJECTION%20CERTIFICATE_Format_Electrothon.docx"; // 👉 Replace with your actual NOC file link
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="round2-container">
      {/* Title */}
      <h2 className="round2-title">2nd Round Registration And Guidelines</h2>
      <hr className="divider" />

      {/* Buttons Row */}
      <div className="round2-buttons-row">
        {/* Register */}
        <a href={registerLink} target="_blank" rel="noopener noreferrer">
          <button className="register-btn small-btn">Click to REGISTER</button>
        </a>

        {/* Selected Teams */}
        <button
          className="register-btn small-btn"
          onClick={() => setShowTable(!showTable)}
        >
          Selected Teams
        </button>

        {/* NOC */}
        <a href={nocLink} download>
          <button className="noc-btn small-btn">Download NOC Template</button>
        </a>
      </div>

      {/* Show congratulatory message + table */}
      {showTable && (
        <div className="round2-table-wrapper congratulatory-table">
          <div className="round2-message congratulatory">
            🏆 Congratulations to the following 35 teams for being selected for
            ROUND-2. Please complete registration before <b>20th August 2025, 5 PM</b>.
            If not, waitlisted teams will be given the opportunity.
          </div>

          <div className="round2-table-title">🎉 Selected Teams for Round-2 🎉</div>
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
