import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css";

const NavigationSidebar = () => {
  const paths = useLocation().pathname.split("/");
  const active = paths[2];
  return (

      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          <a className={`nav-link ${active === '' ? 'active' : ''}`}>
            <Link to="/tuiter/"><i className="bi bi-bank"/>Root</Link></a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active === 'home' ? 'active' : ''}`}>
            <Link to="/tuiter/home"><i className="bi bi-house"/>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active === 'explore' ? 'active' : ''}`}>
            <Link to="/tuiter/explore"><i className="bi bi-hash"/>Explore</Link></a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active === 'lists' ? 'active' : ''}`}>
            <Link to="/tuiter/"><i className="bi bi-card-list"/>Home Page</Link></a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active === 'profile' ? 'active' : ''}`}>
            <Link to="/tuiter/profile"><i className="bi bi-person"/>Profile</Link></a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${active === 'more' ? 'active' : ''}`}>
            <Link to="/tuiter/"><i className="bi bi-three-dots"/>More</Link></a>
        </li>
      </ul>

  );

};
export default NavigationSidebar;

