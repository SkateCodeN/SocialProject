import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/framework.css";
import "./css/theme.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignUp = () => {
    navigate("/register");  // Programmatically navigate to /register
  };

  return (
    <div className="card card--sign-in">
      <h2 className="align--center heading--large">Login</h2>
      <form onSubmit={handleSubmit} className="form__group">
        <div className="grid" style={{display:"flex", flexDirection:"column"}}>
          <div>
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
          </div>
        </div>

        <div className="align--center">
          <button type="submit" className="button button--blue">
            Sign In
          </button>
          
        </div>
        <div className="align--center">
        <button type="button" className="button button--gray " onClick={handleSignUp} >
            Register
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
