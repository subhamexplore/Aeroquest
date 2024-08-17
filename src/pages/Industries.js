import React from "react";
import contact from "../assets/images/industries.png";
import "../assets/styles/Industries.css";
import a1 from "../assets/images/i1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import { MdArrowForwardIos } from "react-icons/md";

const Industries = () => {
  return (
    <div>
      <div className="caro-bg" style={{ backgroundImage: `url(${contact})` }}>
        <div className="caro-box" id="caro-box">
          <div>
            <h5 className="caro-box-para">Aeroquest</h5>
            <h1 className="caro-box-head" style={{ marginBottom: "40px" }}>
              Industries Served
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
      <div
        className="about-section"
        style={{ paddingTop: "120px", background: "rgba(240, 241, 242, 1)" }}
      >
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
            Industries Served
          </h6>
        </div>
        <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
          Industries we have served
        </h2>
        <p
          style={{
            width: "50vw",
            fontSize: "0.9rem",
            lineHeight: "30px",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          When it comes to our capabilities at Aero Quest, the sky is the limit.
          From agriculture to telecom and everything in between, we proudly
          serve a myriad of industries.
        </p>
        <br />
        <button
          className="nav-button btn"
          type="submit"
          style={{ padding: "20px 60px" }}
        >
          Reach Out
        </button>
        <br />
        <br />
        <br />
        <div className="row" style={{ margin: "0", gap:"20px"}}>
          <div className="cards-three-2 col-lg-5">
            <div>
              <div className="logo-top mb-3">
                <div>
                  <img className="mb-3" src={a1} alt="" height={40} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>Agriculture</h6>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "25px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                For farming, our drone surveys offer greater cost-effectiveness
                and accuracy than traditional inspections. Whether that’s
                monitoring crop health or assessing stand counts, we offer a
                viable alternative to lengthy walks and tractor trips.
              </p>
              <div className="all-points">
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Crop health</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Silos & barns</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}> Irrigation systems</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Greenhouses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-three-2 col-lg-5">
            <div>
              <div className="logo-top mb-3">
                <div>
                  <img className="mb-3" src={a1} alt="" height={40} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>Agriculture</h6>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "25px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                For farming, our drone surveys offer greater cost-effectiveness
                and accuracy than traditional inspections. Whether that’s
                monitoring crop health or assessing stand counts, we offer a
                viable alternative to lengthy walks and tractor trips.
              </p>
              <div className="all-points">
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Crop health</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Silos & barns</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}> Irrigation systems</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Greenhouses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-three-2 col-lg-5">
            <div>
              <div className="logo-top mb-3">
                <div>
                  <img className="mb-3" src={a1} alt="" height={40} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>Agriculture</h6>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "25px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                For farming, our drone surveys offer greater cost-effectiveness
                and accuracy than traditional inspections. Whether that’s
                monitoring crop health or assessing stand counts, we offer a
                viable alternative to lengthy walks and tractor trips.
              </p>
              <div className="all-points">
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Crop health</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Silos & barns</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}> Irrigation systems</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Greenhouses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-three-2 col-lg-5">
            <div>
              <div className="logo-top mb-3">
                <div>
                  <img className="mb-3" src={a1} alt="" height={40} />
                </div>
                <div>
                  <h6 style={{ color: "rgba(0, 73, 105, 1)" }}>Agriculture</h6>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "25px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                For farming, our drone surveys offer greater cost-effectiveness
                and accuracy than traditional inspections. Whether that’s
                monitoring crop health or assessing stand counts, we offer a
                viable alternative to lengthy walks and tractor trips.
              </p>
              <div className="all-points">
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Crop health</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Silos & barns</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}> Irrigation systems</div>
                </div>
                <div className="points-ind">
                    <div className="point-logo"><MdArrowForwardIos/></div>
                    <div className="point-text" style={{fontSize:'0.9rem', color:"rgba(0, 73, 105, 1)", fontWeight:"600"}}>Greenhouses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
