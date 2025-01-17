<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

  <h1>🌊 Daily Water Intake Site</h1>
  <p>A React.js project that helps users track their daily water intake. The application provides an easy-to-use interface for logging, editing, and managing water consumption data to promote a healthy lifestyle.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li><strong>User Signup/Login:</strong> Users can create an account to track their water intake.</li>
    <li><strong>Water Intake Tracker:</strong> Add daily water intake with automatic date assignment, edit or delete records.</li>
    <li><strong>Error Handling:</strong> Prevent duplicate entries for the same day.</li>
    <li><strong>Listing with Pagination:</strong> View water intake history with easy navigation.</li>
    <li><strong>Difference Calculation:</strong> Displays the difference between target and logged intake.</li>
    <li><strong>Responsive Design:</strong> Fully mobile-friendly with a clean UI.</li>
    <li><strong>Logout:</strong> Securely log out when finished.</li>
    <li><strong>Static Pages:</strong> Informative pages like Home and About Us for better user engagement.</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> , HTML, CSS, Bootstrap</li>
    <li><strong>Storage:</strong> Local Storage for data persistence</li>
  </ul>

  <h2>📂 Project Structure</h2>
  <pre>
daily-water-intake-site/
├── public/              # Public files and assets
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── AboutUs.js   # About Us page
│   │   ├── Home.js      # Home page
│   │   ├── Navbar.js    # Navigation bar
│   │   ├── Login.js     # Login page
│   │   ├── Register.js  # Signup page
│   │   ├── WaterIntakeTracker.js  # Core functionality
│   │   └── WaterList.js # Water intake history with pagination
│   ├── router.js        # Application routing
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json         # Project dependencies
└── README.md            # Project documentation
  </pre>

  
  <h2>🎨 Components Overview</h2>
  <ul>
    <li><strong>Navbar:</strong> Navigation links for Home, About Us, Water List, Add Water, Login, and Signup.</li>
    <li><strong>Home:</strong> Introduction to the app and its features.</li>
    <li><strong>About Us:</strong> Static page providing information about the project.</li>
    <li><strong>Water Intake Tracker:</strong> Form for adding water intake with date auto-filled.</li>
    <li><strong>Water List:</strong> Displays water intake records with pagination and options to edit/delete entries.</li>
    <li><strong>Login/Signup:</strong> User authentication pages to access personalized data.</li>
  </ul>

  <h2>🚧 Future Improvements</h2>
  <ul>
    <li>Integration with a database for cloud-based storage.</li>
    <li>Adding reminders and notifications for users to log water intake.</li>
    <li>Charts to visualize water intake trends.</li>
  </ul>

  <h2>👨‍💻 Developer</h2>
  <p><strong>Name:</strong> Pranav P.S.<br>
  <strong>Email:</strong> <a href="mailto:pranavps043@gmail.com">pranavps043@gmail.com</a><br>


  <p>💡 Stay hydrated and happy coding! 🌊</p>

</body>
</html>
