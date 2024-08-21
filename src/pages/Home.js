import React from "react";
import "../assets/styles/Home.css";
import { MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caro1 from "../assets/images/c1.png";
import caro2 from "../assets/images/c2.png";
import caro3 from "../assets/images/c3.png";
import caro4 from "../assets/images/c4.png";
import caro5 from "../assets/images/c5.png";
import h1 from "../assets/images/h1.png";
import hc1 from "../assets/images/hc1.png";
import h2 from "../assets/images/h2.png";
import hc2 from "../assets/images/hc2.png";
import h3 from "../assets/images/h3.png";
import hc3 from "../assets/images/hc3.png";
import h4 from "../assets/images/h4.png";
import hc4 from "../assets/images/hc4.png";
import c5 from "../assets/videos/home.mp4";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      window.location.reload();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://aeroquest-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setShowAlert(true);
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };
  const nav = useNavigate();
  const carosettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow2 />,
    prevArrow: <Arrow2 />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  function Arrow(props) {
    const { className, style, onClick } = props;
    const isNext = className.includes("slick-next");
    const isPrev = className.includes("slick-prev");
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          display: "flex", // Use flexbox for centering
          alignItems: "center", // Center vertically
          justifyContent: "center",
          color: "rgba(0, 73, 105, 1)",
          background: isNext ? "transparent" : "transparent", // Different colors for next and prev
          borderRadius: "50%",
          fontSize: "20px",
          textAlign: "center",
          width: "40px",
          height: "40px",
          zIndex: 1,
          border: "1px solid rgba(110, 110, 110, 1)",
          ...(isNext ? { right: "-25px" } : { left: "-25px" }),
        }}
        onClick={onClick}
      >
        {isNext ? (
          <FaChevronRight
            style={{
              marginLeft: "-15px",
              position: "relative",
              zIndex: "10000",
            }}
          />
        ) : (
          <FaChevronLeft
            style={{
              marginLeft: "-20px",
              position: "relative",
              zIndex: "10000",
            }}
          />
        )}
      </div>
    );
  }
  function Arrow2(props) {
    const { className, style, onClick } = props;
    const isNext2 = className.includes("slick-next");
    const isPrev = className.includes("slick-prev");
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          display: "flex", // Use flexbox for centering
          alignItems: "center", // Center vertically
          justifyContent: "center",
          color: "rgba(0, 73, 105, 1)",
          background: isNext2 ? "white" : "white", // Different colors for next and prev
          borderRadius: "50%",
          fontSize: "20px",
          textAlign: "center",
          width: "40px",
          height: "40px",
          zIndex: 1,
          border: "1px solid rgba(0, 73, 105, 1)",
          ...(isNext2 ? { right: "-25px" } : { left: "-25px" }),
        }}
        onClick={onClick}
      >
        {isNext2 ? (
          <FaChevronRight
            style={{
              marginLeft: "-15px",
              position: "relative",
              zIndex: "10000",
            }}
          />
        ) : (
          <FaChevronLeft
            style={{
              marginLeft: "-20px",
              position: "relative",
              zIndex: "10000",
            }}
          />
        )}
      </div>
    );
  }
  return (
    <div>
      {showAlert && <div class="alert alert-success" role="alert" style={{position:'fixed', top:'10px', width:"100%", zIndex:"10000"}}>
        Thanks for contacting us! We will be in touch with you shortly.
      </div>}
      <div className="caro-home">
        <div style={{ position: "relative" }}>
          <video
            className=" d-block w-100"
            autoPlay
            muted
            loop
            style={{ filter: "brightness(0.6)" }}
          >
            <source src={c5} type="video/mp4" />
          </video>
          <div className="home-caro-h">
            {/* <div style={{ textTransform: "uppercase" }}>Aeroquest</div> */}
            <br />
            <h1 className="h-home">Trusted Drone Inspection</h1>
            <h1 className="h-home">Services Across Industries</h1>
            {/* <div>
              At Aero Quest, our experienced pilots offer precise and efficient
              drone services for agriculture, energy,
            </div>
            <div>
              telecom, infrastructure, and beyond. Reach out today to schedule
              your aerial survey.
            </div> */}
            <div
              className="d-flex align-items-center justify-content-center dis-h"
              style={{ gap: "10px", cursor: "pointer" }}
              onClick={() => nav("/about")}
            >
              <div className="md-arr">
                <MdArrowForwardIos />
              </div>
              <div className="">DISCOVER</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ind-serv">
        <h3 className="my-5" style={{ textAlign: "center" }}>
          Industries Served
        </h3>
        <div className="container caro-crd">
          <Slider {...settings}>
            <div className="d-flex justify-content-center">
              <img src={caro1} height={70} className="caro-cards" alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={caro2} height={70} className="caro-cards" alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={caro3} height={70} className="caro-cards" alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={caro4} height={70} className="caro-cards" alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={caro5} height={70} className="caro-cards" alt="" />
            </div>
          </Slider>
          <br />
          <br />
        </div>
      </div>
      <div className="row" style={{ margin: "0" }}>
        <div className="col-lg-6 back-text">
          <div>
            <h1>Creative Aeroquest Drone Team</h1>
            <div
              className=""
              style={{
                textTransform: "uppercase",
                textDecoration: "underline",
              }}
            >
              More about Aeroquest
            </div>
          </div>
        </div>
        <div className="col-lg-6 back-text-side">
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
              Our Drone Services
            </h6>
          </div>
          <h3>
            Accurate,{" "}
            <span style={{ color: "rgba(0, 73, 105, 1)" }}>Cost-Effective</span>
             and  Compliant
          </h3>
          <div style={{ lineHeight: "25px" }}>
            For the full spectrum of aerial surveys, we’re ready to take flight.
            From drone crop inspections to wind turbine aerial surveys, we’re
            your one-stop source for the best drone imaging services.
          </div>
          <br />
          <div>Here’s what you can expect:</div>
          <br />
          <div className="d-flex align-items-center mb-3">
            <div className="md-arr-1">
              <MdArrowForwardIos />
            </div>
            <div>State-of-the-art drone technology</div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="md-arr-1">
              <MdArrowForwardIos />
            </div>
            <div>Ultra-high-resolution cameras</div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="md-arr-1">
              <MdArrowForwardIos />
            </div>
            <div>Safe drone inspections from vetted pilots</div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="md-arr-1">
              <MdArrowForwardIos />
            </div>
            <div>Nationwide support, including remote areas</div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="md-arr-1">
              <MdArrowForwardIos />
            </div>
            <div>And much more</div>
          </div>
        </div>
      </div>
      <div className="abt-us-home">
        <div className="d-flex align-items-center" style={{ gap: "30px" }}>
          <div
            className="about-section-line"
            style={{
              background: "white",
              width: "50px",
              height: "3px",
            }}
          ></div>
          <h6 className="about-section-head" style={{ color: "white" }}>
            About Us
          </h6>
        </div>
        <h2 className="my-3">What We Do</h2>
        <div>Top-Rated Aerial Drone Surveys</div>
        <br />
        <br />
        <div className="container caro-crd">
          <Slider {...settings2}>
            <div className="d-flex justify-content-center">
              <div
                className="card"
                id="card"
                style={{
                  width: "19rem",
                  borderRadius: "0",
                  // border: "none",
                  height: "430px",
                }}
              >
                <img
                  src={h1}
                  className="card-img-top"
                  alt="..."
                  height={180}
                  style={{ border: "none" }}
                />
                <div
                  className="hc"
                  style={{ margin: "auto", position: "relative", top: "-35px" }}
                >
                  <img src={hc1} height={40} alt="" />
                </div>
                <div
                  className="card-body"
                  style={{
                    fontSize: "0.75rem",
                    textAlign: "center",
                    marginTop: "-30px",
                  }}
                >
                  <p
                    className="card-title card-tit-h"
                    style={{ color: "rgba(0, 73, 105, 1)", fontSize: "0.9rem" }}
                  >
                    Drone Agriculture Inspections
                  </p>
                  <p
                    className="card-text"
                    style={{ color: "rgba(0, 0, 0, 0.65)", lineHeight: "25px" }}
                  >
                    Conducting aerial crop surveys involves using specialized
                    sensors, such as multispectral or thermal cameras, mounted
                    on drones or aircraft. These sens...
                  </p>
                  <p
                    className="lm"
                    style={{
                      color: "black",
                      marginTop: "-10px",
                      marginBottom: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => nav("/industries")}
                  >
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="card"
                id="card2"
                style={{
                  width: "19rem",
                  borderRadius: "0",
                  // border: "none",
                  height: "430px",
                }}
              >
                <img
                  src={h2}
                  className="card-img-top"
                  alt="..."
                  height={180}
                  style={{ border: "none" }}
                />
                <div
                  className="hc"
                  style={{ margin: "auto", position: "relative", top: "-35px" }}
                >
                  <img src={hc2} height={40} alt="" />
                </div>
                <div
                  className="card-body"
                  style={{
                    fontSize: "0.75rem",
                    textAlign: "center",
                    marginTop: "-30px",
                  }}
                >
                  <p
                    className="card-title card-tit-h"
                    style={{ color: "rgba(0, 73, 105, 1)", fontSize: "0.9rem" }}
                  >
                    Aerial Telecom Surveys
                  </p>
                  <p
                    className="card-text"
                    style={{ color: "rgba(0, 0, 0, 0.65)", lineHeight: "25px" }}
                  >
                    Performing drone surveys for telecom towers and
                    infrastructure involves using drones equipped with
                    high-resolution cameras and sensors to inspect and a
                  </p>
                  <p
                    className="lm"
                    style={{
                      color: "black",
                      marginTop: "-10px",
                      marginBottom: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => nav("/industries")}
                  >
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="card"
                id="card3"
                style={{
                  width: "19rem",
                  borderRadius: "0",
                  // border: "none",
                  height: "430px",
                }}
              >
                <img
                  src={h3}
                  className="card-img-top"
                  alt="..."
                  height={180}
                  style={{ border: "none" }}
                />
                <div
                  className="hc"
                  style={{ margin: "auto", position: "relative", top: "-35px" }}
                >
                  <img src={hc3} height={40} alt="" />
                </div>
                <div
                  className="card-body"
                  style={{
                    fontSize: "0.75rem",
                    textAlign: "center",
                    marginTop: "-30px",
                  }}
                >
                  <p
                    className="card-title card-tit-h"
                    style={{ color: "rgba(0, 73, 105, 1)", fontSize: "0.9rem" }}
                  >
                    Solar & Wind Farm Surveys
                  </p>
                  <p
                    className="card-text"
                    style={{ color: "rgba(0, 0, 0, 0.65)", lineHeight: "25px" }}
                  >
                    Carrying out drone inspections of solar panels and wind
                    turbines involves using drones equipped with thermal and
                    visual sensors to detect defects, ineffici...
                  </p>
                  <p
                    className="lm"
                    style={{
                      color: "black",
                      marginTop: "-10px",
                      marginBottom: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => nav("/industries")}
                  >
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="card"
                id="card3"
                style={{
                  width: "19rem",
                  borderRadius: "0",
                  // border: "none",
                  height: "430px",
                }}
              >
                <img
                  src={h4}
                  className="card-img-top"
                  alt="..."
                  height={180}
                  style={{ border: "none" }}
                />
                <div
                  className="hc"
                  style={{ margin: "auto", position: "relative", top: "-35px" }}
                >
                  <img src={hc4} height={40} alt="" />
                </div>
                <div
                  className="card-body"
                  style={{
                    fontSize: "0.75rem",
                    textAlign: "center",
                    marginTop: "-30px",
                  }}
                >
                  <p
                    className="card-title card-tit-h"
                    style={{ color: "rgba(0, 73, 105, 1)", fontSize: "0.9rem" }}
                  >
                    Infrastructure Drone Inspections
                  </p>
                  <p
                    className="card-text"
                    style={{ color: "rgba(0, 0, 0, 0.65)", lineHeight: "25px" }}
                  >
                    Surveying bridges, roads, water towers, and other
                    infrastructure using drones involves capturing
                    high-resolution images and 3D models to assess structura...
                  </p>
                  <p
                    className="lm"
                    style={{
                      color: "black",
                      marginTop: "-10px",
                      marginBottom: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => nav("/industries")}
                  >
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </Slider>
          <br />
          <br />
        </div>
      </div>
      <div className="contact-us-home">
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
            Schedule Your Aerial
          </h6>
        </div>
        <h3 className="my-3">Inspection Today</h3>
        <div style={{ width: "50%" }}>
          Let’s take to the skies. For each of the services listed above and
          more, our dedicated pilots are here to help. Fill out our form below
          to get in touch with Aero Quest today.
        </div>
        <br />
        <br />
        <form id="form" action="" onSubmit={handleSubmit}>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-4 col-md-4 form-left">
              <input
                name="fname"
                type="text"
                placeholder="First Name *"
                onChange={handleChange}
              />
              <br />
              <input
                name="lname"
                type="text"
                placeholder="Last Name *"
                onChange={handleChange}
              />
              <br />
              <input
                name="email"
                type="email"
                placeholder="Email *"
                onChange={handleChange}
              />
              <br />
              {/* <div style={{position:'relative'}}> */}
              {/* <div style={{color: "rgba(0, 73, 105, 0.7)", fontSize:"0.75rem", position:"absolute", top:"8px", left:"8px"}}>Industry</div> */}
              {/* <select name="" id="" value="">
                <option value="" disabled>
                  Please Select
                </option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
              </select> */}
              {/* </div> */}
            </div>
            <div className="col-lg-8 col-md-8 form-right">
              <textarea
                name="message"
                id=""
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <button
              className="nav-button btn col-lg-4 col-md-4 nav-contact-btn"
              type="submit"
              style={{ padding: "20px", transform: "scale(0.95)" }}
            >
              SEND MESSAGE
            </button>
            <div className="col-lg-8 col-md-8"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
