import React from "react";
import "../assets/styles/Contact.css";
import contact from "../assets/images/contact.png";
import { useState, useEffect } from "react";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      window.location.reload();
    }, 3000);
    return () => clearTimeout(timer);
  }, [showAlert]);
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

  return (
    <div>
      {showAlert && (
        <div
          class="alert alert-success"
          role="alert"
          style={{
            position: "fixed",
            top: "10px",
            width: "100%",
            zIndex: "10000",
          }}
        >
          Thanks for contacting us! We will be in touch with you shortly.
        </div>
      )}
      <div className="caro-bg" style={{ backgroundImage: `url(${contact})` }}>
        <div className="caro-box">
          <div>
            {/* <h5 className="caro-box-para">Aeroquest</h5> */}
            <h1 className="caro-box-head" style={{ marginBottom: "40px" }}>
              Contact Us
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
            Contact Aero Quest
          </h6>
        </div>
        <h2 className="mt-3" style={{ color: "rgba(0, 73, 105, 1)" }}>
          Please use the Form
        </h2>
        <p
          style={{
            width: "50vw",
            fontSize: "0.9rem",
            lineHeight: "30px",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          Whether you have questions or are interested in a complimentary
          estimate, we invite you to contact us today. To get started, fill out
          the form below. From there, a member of our dedicated support team
          will be in touch at their earliest availability. We look forward to
          bringing the next generation of drone survey technology to your land
          or equipment.
        </p>
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

export default Contact;
