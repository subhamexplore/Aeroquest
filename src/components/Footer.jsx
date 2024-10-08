import React from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="footer-section">
        <div className="footer-top row" style={{ margin: "0" }}>
          <div className="col-lg-4 mb-5" style={{}}>
            <img className="mb-4" src={logo} alt="" height={70} />
            <div>200 N Phillips Ave, STE L 104,</div>
            <div>Sioux Falls, SD 57104</div>
            <div>+1 555 123 4567 +1 555 987 6543</div>
            <div>info@aeroquestuav.com</div>
          </div>
          <div className="row col-lg-8" style={{ margin: "0" }}>
            {/* <div className="col-lg-3 col-md-3">
              <h5 className="mb-4 footer-h">Useful Links</h5>
              <ul style={{listStyle:"none", margin:"0", padding:"0", lineHeight:"40px"}}>
                <li>Documents</li>
                <li>Products</li>
                <li>Aeroquest Shop</li>
                <li>Blog and News</li>
              </ul>
            </div> */}
            <div className="col-lg-3 col-md-3">
              <h5 className="mb-5 footer-h">Main Menu</h5>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  lineHeight: "40px",
                }}
              >
                <li style={{ cursor: "pointer" }} onClick={() => nav("/")}>
                  Home
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => nav("/about")}>
                  About
                </li>
                {/* <li style={{cursor:"pointer"}} onClick={()=>nav('/about')}>About</li>
                <li style={{cursor:"pointer"}} onClick={()=>nav('/industries')}>Industries</li>
                <li style={{cursor:"pointer"}} onClick={()=>nav('/contact')}>Contact</li> */}
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <h5 className="mb-5 footer-h" style={{opacity:"0"}}>.</h5>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  lineHeight: "40px",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => nav("/industries")}
                >
                  Industries
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => nav("/contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          style={{
            color: "rgba(255, 255, 255, 0.25)",
            background: "rgba(255, 255, 255, 0.25)",
            height: "2px",
          }}
        />
        <div className="footer-bottom row" style={{ margin: "0" }}>
          <div className="col-lg-6 footer-bottom-copy">
            @ 2024 Aeroquest. All rights reserved
          </div>
          {/* <div
            className="col-lg-6 row footer-bottom-nav"
            style={{ margin: "0" }}
          >
            <div
              className="col-lg-3 col-md-3"
              style={{ cursor: "pointer" }}
              onClick={() => nav("/")}
            >
              Home
            </div>
            <div
              className="col-lg-3 col-md-3"
              style={{ cursor: "pointer" }}
              onClick={() => nav("/about")}
            >
              About
            </div>
            <div
              className="col-lg-3 col-md-3"
              style={{ cursor: "pointer" }}
              onClick={() => nav("/industries")}
            >
              Industries
            </div>
            <div
              className="col-lg-3 col-md-3"
              style={{ cursor: "pointer" }}
              onClick={() => nav("/contact")}
            >
              Contact
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
