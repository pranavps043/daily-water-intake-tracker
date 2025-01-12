import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function generateToken() {
    return `${email}-${Date.now()}`;
  }

  function attemptLogin() {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setErrorMessage('');
      const token = generateToken();
      localStorage.setItem("loggedInUser", JSON.stringify({ ...user, token }));
      navigate('/home');
    } else {
      setErrorMessage("Invalid email or password.");
    }
  }

  return (
    <div id="login">
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h1>Login</h1>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
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
          <button className="btn btn-primary" onClick={attemptLogin}>
            Login
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Keyframes for smooth slide-in effect */
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Container that holds the login form */
        #login {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background-color: #f4f4f4;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        /* The main login card box */
        .login-card {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 40px 30px;
          width: 100%;
          max-width: 700px;
          text-align: center;
          animation: slideIn 1s ease-in-out;
        }

        /* Heading */
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #00796b;
        }

        /* Form input field styles */
        .form-group {
          margin-bottom: 20px;
          text-align: left;
        }

        label {
          font-size: 1rem;
          color: #00796b;
          margin-bottom: 5px;
          display: block;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .form-control:focus {
          border-color: #00796b;
          box-shadow: 0 0 5px rgba(0, 121, 107, 0.5);
        }

        /* Button styles */
        .btn {
          background: rgb(77, 88, 86);
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          width: 100%;
          transition: background 0.3s ease;
        }

        .btn:hover {
          background: #083573;
        }

        /* Error message box */
        .error-message {
          background: #ffcdd2;
          color: #b71c1c;
          padding: 10px;
          margin-bottom: 15px;
          border-radius: 5px;
          font-size: 0.9rem;
        }

        /* Responsive Design: On smaller screens */
        @media (max-width: 767px) {
          .login-card {
            padding: 30px 20px;
          }

          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
