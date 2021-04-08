import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Hire Frederick D Thomas Jr_2021.pdf";
import pdf2 from "../../Assets/Frederick Thomas_CV_2021.pdf";

function Resume() {
  // GET IN ON THIS, DAILY!!!!
  // You are scn_2021 //
  const uri = "";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [, upadateSem] = useState(0);
  const [, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>

        {/* Buttons */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;Download Resume</i>
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <Button variant="primary" href="https://supercodingninja.github.io/markdown-cv/" target="_blank">
            <i className="fas fa-star">&nbsp;View Awesome Online CV&nbsp;</i>
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <Button variant="primary" href={pdf2} target="_blank">
            <i className="fas fa-download">&nbsp;Download Printable CV</i>
          </Button>
        </Row>


        {/* Experiences */}
        <Row className="resume">
          <Col md={6} className="resume-left">
            
            <h3 className="resume-title">Experience</h3>
            
            <Resumecontent
              title="GRADUATE"
              date="September 2020 - April 2021"
              content={[
                'After suffering from both, unfair treatment (payroll conflicts) and our world`s pandemic, I went through a rigourous and rewarding training program at the University of Washington (UW) Professional and Continuing Education Program, conducted by Trilogy Education Services (a 2U, Inc. brand); which helped me become first, a front-end developer; and then a Full-Stack Web Developer (MERN).  I plan to take advantage of their Python training.  This by far, the best and most structure and elaborate Coding Bootcamp I have ever attended.  I have already started speaking with and writing to my State`s Senators and Congressional Representatives, in promoting this  curriculum program; and possible solutions to the pandemic, and unemployment (particularly among Veterans, their families, women and minorities).  Equal is equal; “Injustice anywhere is a threat to justice everywhere."  -Dr. Martin Luther King, Jr.',
              ]}
            />
            
            <Resumecontent
              title="Independent Contractor"
              date="July 2020 - February 2021"
              content={[
                'I became an Independant Contractor, when given the offer of my last employer, who helped me transition from another company (payroll conflicts).  I did well at all the security companies I worked for and with; but due to the increasing dangers, children`s tuition, and health concerns, I decided to go after my dreams, again.  I`m glad I did!',
              ]}
            />
            
            <Resumecontent
              title="Minister"
              date="September 2011 - Present"
              content={[
                'I am a licensed minister within my church organization; and I personally help the homeless, and families in need. I try to help others, no matter what their beliefs are. I love winning people.',
              ]}
            />
            
            <Resumecontent
              title="United States Marine"
              date="April 2001 - April 2009"
              content={[
                `Trained subordinates in their MOS and basic military skills.
                Held accountable for the actions of the squad, section, or team I was responsible for.
                Enforced the standards of military and physical appearance.
                Ensured supervision, control, and discipline of subordinates.
                Assisted in personal and professional development of fellow Marines.
                Provided communication link between the individual Marine and the organization.
                Planned and conducted the routine and day-to-day unit operation within the policies established by my senior officers.
                Maintained appearance and condition of unit billeting spaces, facilities, and work areas.
                Maintained serviceability, accountability, and readiness of assigned arms and equipment.
                Maintained the established standards of professionalism and job performance for the Marines, the NCO's, the SNCO's and the Corps.
                Supported, followed, and implemented policy established by officers.
                Acted as a liaison between subordinate troops and superior officers.
                Made efforts to achieve unit cohesion.
                Possessed an High EL score of 105 (min. 90).
                Completed the Field Radio Operator Course at MCCES 29 Palms, CA.
                Possessed a valid state driver's license.
                Natural Born U. S. Citizen
                Held a secret security clearance.
                Highly Awarded.
                Logistics.
                Security.`,
              ]}
            />


            {/* Extracurricular Activities */}
            <h3 className="resume-title">Extracurricular Activities</h3>

            <Resumecontent
              title="Musician, Actor, Writer, Comedian"
              content={[
                "I am a Musican for over 32 years. I have been a Saxophonist for 27 years. Writing was once, my weakest element; and now it is a great strength. I like to act, when given the opportunity. I also love to laugh; and cause others to have a good time."
              ]}
            />


            <Resumecontent
              title="Mixed Martial Arts and Sports"
              content={[
                "I have practiced Mixed Martial Arts, played on Rugby, Football, Soccer, and Wrestling teams. I enjoy watching NFL games with a few friends; or even professional colleagues.",
              ]}
            />
          </Col>


          {/* Education */}
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="UW Coding Bootcamp"
              date="2021"
              content={[`Professional Certificate: Full-Stack Web Developer`]}
            />
            
            <Resumecontent
              title="Code Fellows, Seattle, WA"
              date="2016-2017"
              content={[`Code Bootcamp: Front-End Web Developer I completed Code Courses 101, 102; and 201 (scored 82.96 while working Full-Time, passed 301 Course Entrance Exam).`]}
            />

            <Resumecontent
              title="New Testament Christian Seminary"
              date="2011"
              content={["Certificate: Minister of Religion  CGPA: 3.4"]}
            />

            <Resumecontent
              title="DeVry University"
              date="2009 - 2011"
              content={["Sophomore, Majored in Network Communications Management"]}
            />


            {/* MY RANKINGS AND AWARDS */}
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "SIS, Operations’ Coin (Honorable Mention by Client and Operations MGMNT), Seattle, WA",
                "AlliedBarton, Employee of The Month, Seattle, WA",
                "United States Marine Corps, Rifle Marksmanship Badge, MCB Camp Pendleton, CA",
                "United States Navy, Marine Corps Good Conduct Medal (x2), Deployed Command (Operation Iraqi Freedom) and Parent Command",
                "United States Marine Corps, Iraq Campaign Medal, Operation Iraqi Freedom",
                "United States Marine Corps, Humanitarian Service Medal (w/1 Star), Operation Enduring Freedom",
                "United States Marine Corps, Global War on Terrorism Service Medal, Operation Enduring Freedom",
                "United States Marine Corps, Sea Service Deployment Service Ribbon (w/2 Stars), Operations Enduring Freedom and Iraqi Freedom",
                "United States Marine Corps, Global War on Terrorism Expeditionary Medal (Iraq), Operation Iraqi Freedom",
                "United States Marine Corps, National Defense Service Medal, Operations Enduring Freedom and Iraqi Freedom",
                "United States Navy, Navy Meritorious Unit Commendation, Operation Iraqi Freedom",
                "United States Navy, Navy Unit Commendation, Operation Enduring Freedom",
                "United States Navy, Presidential Unit Citation- Navy, Operation Iraqi Freedom",
                "United States Marine Corps, Meritorious Mast (x3), Operations Enduring Freedom and Iraqi Freedom",
                "United States Marine Corps, Iraq Campaign Medal, Operation Iraqi Freedom",
                "United States Marine Corps, Letter of Commendation, Operation Enduring Freedom",
                "United States Marine Corps, Certificate of Commendation, Operation Enduring Freedom",
                "United States Marine Corps, Certificate of Appreciation, Operation Iraqi Freedom",
                "United States Marine Corps, Letter of Appreciation, Operation Iraqi Freedom",
                `Current rank in Spoj   ${spojRank}   (New)`,
                `Current rank in HackerRank  ${hackerrank}   (New)`,
              ]}
              />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          
        <a 
          href="/#"
          className="to-top"
          
        >Back to top</a>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;