import React from "react";
import "./MobileNav.css";
import { MenuNavs } from "../../../constants";
import { logo } from "../../../assets";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src={logo} height={50} alt="logo" />

          <ul>
            {MenuNavs.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="menu-item"
                  onClick={() => handleScroll(item.to)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
