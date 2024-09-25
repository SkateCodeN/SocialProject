import React, { useState } from "react";
import "./css/framework.css";
import "./css/theme.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic password matching check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="card card--sign-in">
      <h2 className="align--center heading--large">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form__group">
        <div className="grid">
          {/* Name Field */}
          <label htmlFor="name" className="label__required-field">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />

          {/* Email Field */}
          <label htmlFor="email" className="label__required-field">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          {/* Password Field */}
          <label htmlFor="password" className="label__required-field">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          {/* Confirm Password Field */}
          <label htmlFor="confirmPassword" className="label__required-field">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit Button */}
        <div className="align--center">
          <button type="submit" className="button button--blue">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
