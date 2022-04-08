import "./sidebar.css";
import logo from "./../../assets/logo.svg";
import Widget from "../widget/widget";
import { Link, NavLink } from "react-router-dom";
import Refer from "../refer/Refer";

export default function Sidebar() {
  /* const toggle = document.getElementById("toggle");
  const sidebar = document.getElementById("sidebar");
  toggle.onclick = function () {
    toggle.classList.toggle("active");
    sidebar.classList.toggle("active");
  }; */

  return (
    <>
      <div id="toggle"></div>
      <div className="side-nav" id="sidebar">
        <img className="logo" src={logo} alt="logo" />
        <Widget />
        <ul>
          <li>
            <i className="fas fa-th-large"></i>
            Dashboard
          </li>
          <li>
            <i className="fas fa-wallet"></i>
            Wallet
          </li>
          <li>
            <i className="fas fa-credit-card"></i>
            Card
          </li>
          <li>
            <NavLink
              to="/fx"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#fff" : "#017189",
                color: isActive ? "#017189" : "#fff",
                padding: isActive ? "10px 15px" : "0",
                borderRadius: isActive ? "8px" : "0",
                textDecoration: "none",
              })}
            >
              <i className="fas fa-dollar-sign"></i>
              FX Center
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#fff" : "#017189",
                color: isActive ? "#017189" : "#fff",
                padding: isActive ? "10px 15px" : "0",
                borderRadius: isActive ? "8px" : "0",
                textDecoration: "none",
              })}
            >
              <i className="fas fa-users"></i>
              Beneficiaries
            </NavLink>
          </li>
          <li>
            <i className="fas fa-tag"></i>
            Perks
          </li>
        </ul>
        <Refer />
      </div>
    </>
  );
}
