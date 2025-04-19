import React from "react";
import "./Navbar.css"; // Import custom styles

function Navbar({ setActiveTab, activeTab }) {
  return (
    <nav className="navbar">
      <button
        className={`nav-button ${activeTab === "registrationTab" ? "active" : ""}`}
        onClick={() => setActiveTab("registrationTab")}
      >
        Student Registration
      </button>
      <button
        className={`nav-button ${activeTab === "studentListTab" ? "active" : ""}`}
        onClick={() => setActiveTab("studentListTab")}
      >
        Student List
      </button>
      <button
        className={`nav-button ${activeTab === "reportsTab" ? "active" : ""}`}
        onClick={() => setActiveTab("reportsTab")}
      >
        Reports
      </button>
    </nav>
  );
}

export default Navbar;