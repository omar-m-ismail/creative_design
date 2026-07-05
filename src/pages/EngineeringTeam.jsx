import "../team.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function EngineeringTeam() {


  return (
    <div className="team_page">
            <header className="header">
        <br />
      </header>
      <div className="team_content">
  
        <div className="team_yap">
          <div className="img-storage">
        <img src="team_top3.webp" alt="" />
                                  <div className="img-overlay">
              <h5>London Office</h5>

            </div>

            </div>
        <div className="holding">
        <Link to="/" className="tohome2"  onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faHouse} />Home →
        </Link>   
        <p className="p1">At Creative Structures, we believe in working together and
          <br />

praising the diverse strengths we each bring. 
<br />
<br />
Join us at Creative Structures and be part of a fulfilling and enriching <br />

experience where you'll be valued, supported, and inspired to reach <br />

your full potential.</p>
</div>
</div>
<div className="dark">
  <div className="row">
              <img src="logo2.png" alt="Civil Engineering" />
              <h1>Our job openings</h1>
            </div>
  <div className="group1">
    <img src="team_top.webp" alt="" />
    <div className="g1text">
      <h2>OAA Intern / Intermediate / Senior Architectural Technologist
 </h2>
      <br />
      <br />
    <p>
     Location: London, Ontario <br />

Position Type: Full-time, Permanent <br />

Work Environment: Onsite <br />

Experience Level: 5+ years preferred (flexible based on exceptional technical and production capability)
    </p>
    <br />
    <h3>About the Role</h3>
    <br />
    <p>Creative Structures is expanding its Architectural team! We are seeking a highly motivated, technically precise OAA Intern / Intermediate or Senior Architectural Technologist who thrives on turning design concepts into flawless construction documents.
The ideal candidate is a powerhouse in Revit, possesses a strong knowledge of the Ontario Building Code (OBC), and has a proven track record of delivering comprehensive permit, tender, and construction packages for commercial and multi-storey projects with minimal supervision.</p>
              <br />
              <h3>Skills/Qualifications</h3>
              <ul>
                <li>Education & Credentials: Registered OAA Intern or Diploma in Architectural Technology, Civil Engineering Technology, or equivalent technical accreditation. </li>
                <li>Software Mastery: Advanced, production-level Revit proficiency is a strict requirement. Strong AutoCAD skills and a deep understanding of BIM workflows are essential.</li>
                <li>OBC Expertise: Thorough knowledge of the Ontario Building Code (OBC) and standard construction systems (wood frame, structural steel, and mass/precast concrete).</li>
                <li>Asset Experience: Proven experience drafting and detailing commercial developments, CRUs, industrial facilities, or multi-storey residential buildings</li>
                <li>Autonomy: A proven ability to work independently, troubleshoot technical details, and drive a project to the finish line with minimal supervision.</li>
                <li>Mindset: A strong eye for detail, a passion for building science, and a collaborative attitude ready to support a growing team.</li>

              </ul>
              <br />
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Be part of growing architectural team</li>
                <li>Production & BIM Coordination: Develop, manage, and detail advanced BIM models and precise architectural working drawings using Revit and AutoCAD.</li>
                <li>Permit & Tender Packages: Independently assemble full construction documentation, coordinating spatial separations, building envelope details, and strict OBC compliance.</li>
                <li>Consultant Coordination: Seamlessly integrate structural, MEP, and civil engineering consultants' drawings into the core architectural model.</li>
                <li>Quality Control: Review shop drawings, coordinate material specifications, and ensure construction details are robust and buildable.</li>
                <li>Field Services: Conduct site investigations, field measurements, and construction progress inspections (valid driver’s license required).</li>
                <li>Workflow Optimization: Support the studio's technical growth by helping streamline BIM standards and integrating advanced design tools into the production workflow.</li>
              </ul>
              <br />
              <h3>How to Apply </h3>
                                <h3>If you are a high-performing technologist looking to take ownership of diverse, impactful projects, please submit your application via email to<a className="underline" href="mailto:cs@creativestr.ca">
cs@creativestr.ca
</a>
<br />
Please include the following as PDF files only:
</h3>


                <ul>                
                  <li>COVER LETTER,</li>
                  <li>RESUME </li>
                  <li>A relevant Portfolio/Drawing Samples showcasing technical detailing and Revit work relevant to commercial, industrial, or multi-storey residential projects.</li>
                </ul>

    </div>
  </div>

</div>


      </div>

    </div>
  );
}