import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // Get the logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Logout functionality
  const handleLogout = () => {
    // Remove the logged-in user from localStorage
    localStorage.removeItem("loggedInUser");

    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-transparent fixed-top">
      <div className="navbar-brand">
        <h2 className="font-weight-bold heading">Daily Water Intake</h2>
      </div>

      {/* Removed the navbar-toggler button */}
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to={"/home"} className="nav-link navbar-link">
              <button className="btn navbar-button">Home</button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/aboutus"} className="nav-link navbar-link">
              <button className="btn navbar-button">About Us</button>
            </NavLink>
          </li>

          {/* Conditionally render Register and Login if the user is not logged in */}
          {!loggedInUser ? (
            <>
              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link navbar-link">
                  <button className="btn navbar-button">Register</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link navbar-link">
                  <button className="btn navbar-button">Login</button>
                </NavLink>
              </li>
            </>
          ) : (
            // If logged in, show Logout button
            <li className="nav-item">
              <button
                className="btn navbar-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
          padding: 10px 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          list-style-type: none; /* Remove the dot before links */
        }

        .navbar-nav .nav-item {
          margin-right: 25px;
        }

        .navbar-link {
          text-decoration: none;
        }

        .navbar-button {
          font-size: 1.2rem;
          color: #ffffff;
          font-weight: 600;
          background-color: transparent;
          border: 2px solid #ffffff;
          padding: 10px 20px;
          border-radius: 30px;
          text-transform: uppercase;
          position: relative;
          transition: all 0.3s ease;
        }

        .navbar-button::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #ffffff;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .navbar-button:hover {
          color: #00796b;
          background-color: #ffffff;
          border-color: #00796b;
          transform: translateY(-3px);
        }

        .navbar-button:hover::after {
          transform: scaleX(1);
        }

        @media (max-width: 767px) {
          .navbar-nav {
            flex-direction: column;
            align-items: flex-start;
          }
          .navbar-nav .nav-item {
            margin-bottom: 15px;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
