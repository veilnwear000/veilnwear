import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks " + name + ", we received your message.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">

      {/* Hero Banner */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help. Reach out anytime.</p>
      </div>

      {/* Glass Form Card */}
      <div className="contact-card">

        <h2>Send a Message</h2>
        <p className="contact-sub">
          We respond within 24–48 hours.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">

          <div className="input-box">
            <label>Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
