import { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <img
          src="/images/housing_society-logo.png"
          alt="Housing Society"
        />
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          HOME
        </a>

        <a
          href="#tower"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("tower");
          }}
        >
          B06 TOWER
        </a>

        <a
          href="#floor-plans"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("floor-plans");
          }}
        >
          FLOOR PLANS
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          CONTACT
        </a>

      </div>

      {/* Hamburger Button */}
      <button
        type="button"
        className={`menu-button ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;