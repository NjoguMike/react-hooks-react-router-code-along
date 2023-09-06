import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'darkblue' : "Aqua"  })}>
        Home
      </NavLink>
      <NavLink
        to="/about" style={({ isActive }) => ({ color: isActive ? 'darkblue' : "Aqua"  })}>
        About
      </NavLink>
      <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'darkblue' : "Aqua"  })}>
        Login
      </NavLink>
    </div>
  );
}

export default NavBar