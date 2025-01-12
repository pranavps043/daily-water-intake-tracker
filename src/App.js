import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="mainPage">
      <Navbar />
      <header
        className="main-header d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", background: "#f0f4f8" }}
      >
        <div className="text-center">
          <h1 className="display-4 font-weight-bold">Welcome to Daily Water Intake</h1>
          <p className="lead font-weight-bold pr">
            Track your daily water intake effortlessly and stay hydrated. Add, Edit, and View your daily water intake logs.
          </p>
         
        </div>
      </header>

      <footer className="footer footer-expand-lg footer-dark footer-transparent fixed-bottom">
        <div className="container text-center">
          <p className="mb-0 font-weight-bold">
            &copy; 2025 Daily Water Intake. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Adding styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
        }

        .main-header {
          color: #333;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          animation: fadeIn 1.5s ease-in-out;
        }

        .pr {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          animation: fadeIn 1.5s ease-in-out;
        }

        .btn-primary {
          background: #00796b;
          border: none;
          color: white;
          padding: 12px 30px;
          font-size: 1.1rem;
          border-radius: 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          animation: fadeIn 1.5s ease-in-out;
        }

        .btn-primary:hover {
          background: #004d40;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          color: #00796b;
          text-align: center;
          background: #f0f4f8;
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

export default App;
