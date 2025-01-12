import React from "react";
import Navbar from "./Navbar";


function WaterIntake() {
  return (
    <div className="waterintake-container" id="waterintake">
      <Navbar />
      <div className="content-container">
        <h1 className="title">Why Track Your Water Intake?</h1>
        <div className="text-section">
          <p>
            Staying hydrated is essential for maintaining good health. Our bodies are made up of 60% water, and it plays a vital role in nearly every bodily function. Tracking your water intake helps ensure that you are drinking enough water to support your body's needs.
          </p>
          <p>
            Water is critical for digestion, nutrient absorption, detoxification, and maintaining healthy skin. However, it can be easy to forget to drink enough water throughout the day. That's where tracking your intake comes in!
          </p>
          <p>
            By monitoring your daily water intake, you can stay on top of your hydration goals and ensure you’re meeting the recommended daily intake for optimal health. Proper hydration can improve energy levels, mental clarity, and even aid in weight management.
          </p>
          <p>
            Our "Water Intake Tracker" allows you to easily log and monitor your water consumption. It’s an effortless way to stay on track with your hydration and live a healthier, more balanced life.
          </p>
        </div>
      </div>
      <footer className="footer footer-expand-lg footer-dark footer-transparent fixed-bottom">
        <div className="container text-center">
          <p className="mb-0 font-weight-bold">&copy; 2025 EasyPharm. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Adding styles */}
      <style jsx>{`
        .waterintake-container {
          
          justify-content: flex-start;
          height: 100vh;
          background: linear-gradient(135deg, #e0f7fa, #80deea);
          padding: 20px;
        }
        .content-container {
          max-width: 10000px;
          width: 100%;
          padding: 1px;
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          margin-top: 30px;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color:rgb(59, 59, 186);
          font-weight: bold;
        }
        .text-section {
          font-size: 1.2rem;
          line-height: 1.;
          color: #34495e;
          margin-top: 1px;
        }
        p {
          margin-bottom: 1rem;
        }
        .footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          color:rgb(8, 47, 42);
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

export default WaterIntake;
