import React, { Fragment, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [clickHam, setClickHam] = useState(false);

  const clickHamburger = () => setClickHam(!clickHam);
  return (
    <Fragment>
      <div className="header">
        <Link to="/">
          <h1>Meth Clean Up</h1>
        </Link>
        <ul className={clickHam ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/meth">Methamphetamine</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={clickHamburger}>
          {clickHam ? (
            <FaTimes size={25} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={25} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
