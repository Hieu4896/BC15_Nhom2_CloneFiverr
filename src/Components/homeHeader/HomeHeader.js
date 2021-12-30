import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./homeHeader.css";
export default function HomeHeader(props) {
  let [Navbar, setNavbar] = useState(false);
  let [Fiverr, setFiverr] = useState(false);
  let [LiHeader, setLiHeader] = useState(false);
  let [JoinStyle, setJoinStyle] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const changeFiverrColor = () => {
    if (window.scrollY >= 150) {
      setFiverr(true);
    } else {
      setFiverr(false);
    }
  };
  window.addEventListener("scroll", changeFiverrColor);
  const changeLiHeaderColor = () => {
    if (window.scrollY >= 150) {
      setLiHeader(true);
    } else {
      setLiHeader(false);
    }
  };
  window.addEventListener("scroll", changeLiHeaderColor);
  const changeJoinColor = () => {
    if (window.scrollY >= 150) {
      setJoinStyle(true);
    } else {
      setJoinStyle(false);
    }
  };
  window.addEventListener("scroll", changeJoinColor);
  return (
    <nav className={Navbar ? "navHeader active" : "navHeader"}>
      <label className="labelHeader">
        <NavLink to="/">
          <span className={Fiverr ? "fiverChange active" : "fiverChange"}>
            fiverr
          </span>
          <span className="docChange">.</span>
        </NavLink>
      </label>
      <ul className="ulHeader">
        <li className="liHeader">
          <NavLink className={LiHeader ? "change" : ""} to="/">
            Become a Seller
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink className={LiHeader ? "change" : ""} to="/">
            Sign in
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink to="/">
            <span className={JoinStyle ? "joinStyle change " : "joinStyle"}>
              Join
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
