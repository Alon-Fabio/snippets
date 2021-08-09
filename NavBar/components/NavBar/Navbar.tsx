import React, { useEffect, useState } from "react";

// Style
import "./NavBar.scss";
// import your logo here↓
// import NavLogo from ;

import Burger from "../Burger/Burger";

const Navbar: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [burgerStyle, setBurgerStyle] = useState({ burger: "", navLinks: "" });

  useEffect(() => {
    window.addEventListener("scroll", scrollDetect);
    return () => {
      window.removeEventListener("scroll", scrollDetect);
      console.log("removed");
    };
  }, []);

  const scrollDetect = () => {
    if (window.scrollY >= 200) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
  };

  const onBurgerClick = (): void => {
    setBurgerStyle((prvState) => {
      if (prvState.burger === "burgerAni") {
        return { burger: "", navLinks: "" };
      } else {
        return { burger: "burgerAni", navLinks: "navLinksShow" };
      }
    });
  };

  return (
    <nav className={scrollTop ? "navbarTop" : ""}>
      {NavLogo ? <img src={NavLogo} alt="Logo" /> : null}
      <div className="navLinksMain">
        <ul className={`navLinks ${burgerStyle.navLinks}`}>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Contact");
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Dox");
            }}
          >
            Dox
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Projects");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("About");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("About");
            }}
          >
            About
          </li>
        </ul>
      </div>
      <Burger burgerStyle={burgerStyle} burgerClick={onBurgerClick} />
    </nav>
  );
};

export default Navbar;
