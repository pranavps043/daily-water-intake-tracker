
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function registerUser() {
    if (password !== passwordConf) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const user = { name, email, password };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(u => u.email === email);

    if (userExists) {
      setErrorMessage("User with this email already exists.");
    } else {
      existingUsers.push(user);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      setErrorMessage('');
      navigate('/login');
    }
  }

  return (
    <div id="register">
      <Navbar />
      <div className="register-container">
        <div className="register-card">
          <h1>Register</h1>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onInput={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onInput={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onInput={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={passwordConf}
              onInput={(event) => setPasswordConf(event.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={registerUser}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        #register {
     
          
        }
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 20px;
        }
        .register-card {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 40px 30px;
          width: 100%;
          max-width: 700px;
          text-align: center;
          animation: fadeIn 1s ease-in-out;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #00796b;
          font-weight: bold;
        }
        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }
        label {
          font-size: 1rem;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .form-control:focus {
          border-color: #00796b;
          box-shadow: 0 0 5px rgba(0, 121, 107, 0.5);
        }
        .btn {
          background: #00796b;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          width: 100%;
        }
        .btn:hover {
          background: #005f56;
        }
        .error-message {
          background: #f8d7da;
          color: #842029;
          padding: 10px;
          margin-bottom: 15px;
          border-radius: 5px;
          font-size: 0.9rem;
          text-align: center;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Register;
