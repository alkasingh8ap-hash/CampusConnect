import { useState } from "react";
import Login from "./Login";
import "./App.css";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>CampusConnect</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

          <button onClick={() => setShowLogin(true)}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Your College, Your Resources</h1>

        <p>
          Access notes, previous year papers, internal exams,
          assignments and important updates in one place.
        </p>

        <button className="start-btn">
          Get Started
        </button>
      </section>

      {/* Resources */}
      <section className="resources">
        <h2>Everything You Need</h2>

        <div className="resource-container">

          <div className="card">
            <h3>📚 Notes</h3>
            <p>Find subject-wise study notes.</p>
          </div>

          <div className="card">
            <h3>📝 PYQs</h3>
            <p>Practice previous year questions.</p>
          </div>

          <div className="card">
            <h3>📄 Internals</h3>
            <p>Access previous internal exam papers.</p>
          </div>

          <div className="card">
            <h3>📋 Assignments</h3>
            <p>Find important college assignments.</p>
          </div>

          <div className="card">
            <h3>📢 Notices</h3>
            <p>Stay updated with college notices.</p>
          </div>

          <div className="card">
            <h3>💬 Doubts</h3>
            <p>Ask and discuss academic doubts.</p>
          </div>

        </div>
      </section>

      {/* Login */}
      {showLogin && <Login />}

    </div>
  );
}

export default App;