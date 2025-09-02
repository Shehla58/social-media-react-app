

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./login.css";

export default function Login() {
  // State to manage email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to toggle between login and registration
  const [username, setUsername] = useState(""); // State to manage username input in the register form
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Function to handle login on button click
  const handleLogin = () => {
    // Simple validation to check if both fields are filled
    if (email && password) {
      // If both fields are filled, navigate to the home page
      navigate("/"); // Replace '/' with your actual home route
    } else {
      alert("Please enter both email and password!");
    }
  };

  // Function to handle registration on button click
  const handleRegister = () => {
    if (username && email && password) {
      // Handle account creation logic here (e.g., send data to a backend server)
      alert("Account created successfully!");
      setIsCreatingAccount(false); // Hide the register form after successful creation
    } else {
      alert("Please fill in all fields to create an account!");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            {isCreatingAccount ? (
              // Registration form
              <>
                <input
                  placeholder="Username"
                  className="loginInput"
                  value={username} // Bind the username state to this input
                  onChange={(e) => setUsername(e.target.value)} // Update the username state on change
                />
                <input
                  placeholder="Email"
                  className="loginInput"
                  value={email} // Bind the email state to this input
                   onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                />
                <input
                  placeholder="Password"
                  className="loginInput"
                  type="password" // Use type password for security
                  value={password} // Bind the password state to this input
                  onChange={(e) => setPassword(e.target.value)} // Update the password state on change
                />
                <button className="loginButton" onClick={handleRegister}>
                  Create Account
                </button>
                <span
                  className="loginForgot"
                  onClick={() => setIsCreatingAccount(false)} // Switch back to login view
                >
                  Already have an account? Log In
                </span>
              </>
            ) : (
              // Login form
              <>
                <input
                  placeholder="Email"
                  className="loginInput"
                  value={email} // Bind the email state to this input
                  onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                />
                <input
                  placeholder="Password"
                  className="loginInput"
                  type="password" // Use type password for security
                  value={password} // Bind the password state to this input
                  onChange={(e) => setPassword(e.target.value)} // Update the password state on change
                />
                <button className="loginButton" onClick={handleLogin}>
                  Log In
                </button>
                <span className="loginForgot">Forgot Password?</span>
                <button
                  className="loginRegisterButton"
                  onClick={() => setIsCreatingAccount(true)} // Switch to registration view
                >
                  Create a New Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

