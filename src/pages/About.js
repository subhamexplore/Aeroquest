import React from "react";
import "../assets/styles/About.css";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import { MdArrowForwardIos } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="caro-bg">
        <div className="caro-box">
          <div>
            <h5 className="caro-box-para">Aeroquest</h5>
            <h1 className="caro-box-head" style={{ marginBottom: "40px" }}>
              About Us
            </h1>
            <div
              className="caro-box-lines d-flex aligb-items-center"
              style={{ gap: "2px" }}
            >
              <div
                style={{ background: "white", width: "40px", height: "3px" }}
              ></div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  width: "70px",
                  height: "3px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section" style={{ paddingTop: "120px" }}>
        <div className="d-flex align-items-center" style={{ gap: "30px" }}>
          <div
            className="about-section-line"
            style={{
              background: "rgba(0, 73, 105, 1)",
              width: "50px",
              height: "3px",
            }}
          ></div>
          <h6
            className="about-section-head"
            style={{ color: "rgba(0, 73, 105, 1)" }}
          >
            About Aeroquest
          </h6>
        </div>
        <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
          Information about us
        </h2>
        <p
          style={{
            width: "50vw",
            fontSize: "0.9rem",
            lineHeight: "30px",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          For our experienced Aero Quest pilots, no field, tower, or turbine is
          out of reach. Our nationwide drone inspection services support better
          decision-making and full peace of mind.
        </p>
        <br />
        <div className="row-flex">
          <div className="cards-three">
            <div>
              <div
                className="logo-top d-flex align-items-center mb-3"
                style={{ gap: "20px" }}
              >
                <div>
                  <img src={a1} alt="" height={50} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>
                    Experienced Pilots
                  </h6>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: "30px" }}>
                We hand-select our pilots based on skill, quality, and
                experience to ensure the safety of your vital equipment.
              </p>
            </div>
          </div>
          <div className="cards-three">
            <div>
              <div
                className="logo-top d-flex align-items-center mb-3"
                style={{ gap: "20px" }}
              >
                <div>
                  <img src={a2} alt="" height={50} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>
                    Streamlined Turnarounds
                  </h6>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: "30px" }}>
                After a simple scheduling process, we deploy our pilots across
                the US for detailed aerial surveys when you need them most.
              </p>
            </div>
          </div>
          <div className="cards-three">
            <div>
              <div
                className="logo-top d-flex align-items-center mb-3"
                style={{ gap: "20px" }}
              >
                <div>
                  <img src={a3} alt="" height={50} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>
                    Best-In-Class Equipment
                  </h6>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: "30px" }}>
                We exclusively use the best imaging technologies and sensors to
                give you the clearest and most accurate drone inspections
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="process-section">
        <div className="d-flex align-items-center" style={{ gap: "30px" }}>
          <div
            className="about-section-line"
            style={{
              background: "rgba(0, 73, 105, 1)",
              width: "50px",
              height: "3px",
            }}
          ></div>
          <h6
            className="about-section-head"
            style={{ color: "rgba(0, 73, 105, 1)" }}
          >
            Our Process
          </h6>
        </div>
        <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
          <span>
            <span style={{ color: "black" }}>How we</span> work
            <span style={{ color: "black" }}>?</span>
          </span>
        </h2>
        <br />
        <br />
        <div className="each-process row" style={{margin:'0'}}>
          <img className="each-process-img col-lg-6 col-md-6" src={p1} alt="" />
          <div className="col-lg-6 col-md-6" style={{paddingLeft:"60px"}}>
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
              <div
                className="about-section-line"
                style={{
                  background: "rgba(0, 73, 105, 1)",
                  width: "50px",
                  height: "3px",
                }}
              ></div>
              <h6
                className="about-section-head"
                style={{ color: "rgba(0, 73, 105, 1)" }}
              >
                01
              </h6>
            </div>
            <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
              Initial Outreach -
            </h2>
            <h2
              className=""
              style={{ color: "rgba(0, 73, 105, 1)", marginTop: "-10px" }}
            >
              Early Stage Reach Out
            </h2>
            <p
              style={{
                width: "40vw",
                fontSize: "0.9rem",
              }}
            >
              Please contact our Aero Quest team to initiate the process. We're
              excited to collaborate with you.
            </p>
            <br />
            <div
              className="d-flex align-items-center"
              style={{ color: "rgba(0, 73, 105, 1)", gap: "20px" }}
            >
              <div className="cir-arrow">
                <MdArrowForwardIos />
              </div>
              <div>DISCOVER</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="each-process each-process-mid row" style={{margin:'0'}}>
          <div className="col-lg-6 col-md-6">
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
              <div
                className="about-section-line"
                style={{
                  background: "rgba(0, 73, 105, 1)",
                  width: "50px",
                  height: "3px",
                }}
              ></div>
              <h6
                className="about-section-head"
                style={{ color: "rgba(0, 73, 105, 1)" }}
              >
                02
              </h6>
            </div>
            <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
              Imagery Collection -
            </h2>
            <h2
              className=""
              style={{ color: "rgba(0, 73, 105, 1)", marginTop: "-10px" }}
            >
              High Resolution Images
            </h2>
            <p
              style={{
                width: "40vw",
                fontSize: "0.9rem",
              }}
            >
              We'll conduct a customized drone survey tailored to your specific
              needs. Your project requirements are our priority
            </p>
            <br />
            <div
              className="d-flex align-items-center"
              style={{ color: "rgba(0, 73, 105, 1)", gap: "20px" }}
            >
              <div className="cir-arrow">
                <MdArrowForwardIos />
              </div>
              <div>DISCOVER</div>
            </div>
          </div>
          <img className="each-process-img col-lg-6 col-md-6" src={p2} alt="" />
        </div>
        <br />
        <br />
        <div className="each-process row" style={{margin:'0'}}>
          <img className="each-process-img col-lg-6 col-md-6" src={p3} alt="" />
          <div className="col-lg-6 col-md-6" style={{paddingLeft:"40px"}}>
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
              <div
                className="about-section-line"
                style={{
                  background: "rgba(0, 73, 105, 1)",
                  width: "50px",
                  height: "3px",
                }}
              ></div>
              <h6
                className="about-section-head"
                style={{ color: "rgba(0, 73, 105, 1)" }}
              >
                03
              </h6>
            </div>
            <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
              Final Report -
            </h2>
            <h2
              className=""
              style={{ color: "rgba(0, 73, 105, 1)", marginTop: "-10px" }}
            >
              Get your results
            </h2>
            <p
              style={{
                width: "40vw",
                fontSize: "0.9rem",
              }}
            >
              Finally, we'll deliver a comprehensive report featuring
              high-resolution imagery and precise data. Your insights will be
              backed by detailed analysis.
            </p>
            <br />
            <div
              className="d-flex align-items-center"
              style={{ color: "rgba(0, 73, 105, 1)", gap: "20px" }}
            >
              <div className="cir-arrow">
                <MdArrowForwardIos />
              </div>
              <div>DISCOVER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
