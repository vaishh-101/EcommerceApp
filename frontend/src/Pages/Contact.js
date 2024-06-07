import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import HomeImg from '../Assets/pet.avif';

function Contact() {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "19px",
    border: "none",
    borderRadius: "8px",
    textAlign: "center",
  };

  const textContainerStyle = {
    marginTop: '20px',
    textAlign: 'center',
    maxWidth: '400px', 
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#704214',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const textSpacing = {
    margin: '0',
    padding: '5px 0',
  };

  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = () => {
    const formData = {
      fullname,
      email,
      message,
    };

    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    existingContacts.push(formData);

    localStorage.setItem('contacts', JSON.stringify(existingContacts));

    Swal.fire({
      title: "Success!",
      text: "Message saved successfully 💌",
      icon: "success",
    });

    setFullname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={centerStyle}>
        <div style={textContainerStyle}>
          <h4 style={{ fontSize: '30px', fontFamily: 'Harrington', ...textSpacing }}>
            Contact Us
            <br /><br/>
          </h4>
          <div>
            <input
              style={inputStyle}
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <br />
            <br />
            <input
              style={inputStyle}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <textarea
              style={{
                ...inputStyle,
                height: '150px',
              }}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <br/>
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "80%",
                  padding: "10px",
                  backgroundColor: "#3D0C02",
                  borderRadius: "10px",
                  color: "white",
                }}
                onClick={handleContactSubmit}
              >
                Submit
              </button><br/>
            </div>
          </div>
          <button style={buttonStyle} onClick={redirectToHomePage}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
