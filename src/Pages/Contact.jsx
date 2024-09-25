import React, { useState } from "react";
import "../css/framework.css";
import "../css/theme.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log("Form submitted:", { name, email, subject, message });
    alert("Thank you for contacting us!");
  };

  return (
    <div className="card card--full-width">
      <h2 className="align--center heading--large">Contact Us</h2>
      <p className="align--center" style={{ padding: "0 1rem" }}>
        We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      
      <form onSubmit={handleSubmit} className="form__group" style={{ padding: "1rem" }}>
        {/* Name Field */}
        <label htmlFor="name" className="label__required-field">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className="form__input"
        />

        {/* Email Field */}
        <label htmlFor="email" className="label__required-field">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="form__input"
        />

        {/* Subject Field */}
        <label htmlFor="subject" className="label__required-field">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          placeholder="Enter subject"
          className="form__input"
        />

        {/* Message Field */}
        <label htmlFor="message" className="label__required-field">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Enter your message"
          rows="5"
          className="form__input"
        />

        {/* Submit Button */}
        <div className="align--center" style={{ marginTop: "1rem" }}>
          <button type="submit" className="button button--blue">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
