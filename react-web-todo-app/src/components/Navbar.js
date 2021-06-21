import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
];

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const handleToggle = () => {
    setNavBarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavBarOpen(false);
  };

  return (
    <div className="navBar">
      <button onClick={handleToggle}>
        {navBarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
      <ul className={`menuNav ${navBarOpen ? "showMenu" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              exact
              onClick={() => closeMenu()}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
