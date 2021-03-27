import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = (props) => {
  return (
    <>
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <img src={logo} alt="logo" />
            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/">Cool stuff</NavLink></li>
              <li><NavLink className="text-muted" to="/">Random feature</NavLink></li>
              <li><NavLink className="text-muted" to="/">Team feature</NavLink></li>
              <li><NavLink className="text-muted" to="/">Stuff for developers</NavLink></li>
              <li><NavLink className="text-muted" to="/">Another one</NavLink></li>
              <li><NavLink className="text-muted" to="/">Last time</NavLink></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/">Resource</NavLink></li>
              <li><NavLink className="text-muted" to="/">Resource name</NavLink></li>
              <li><NavLink className="text-muted" to="/">Another resource</NavLink></li>
              <li><NavLink className="text-muted" to="/">Final resource</NavLink></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/">Business</NavLink></li>
              <li><NavLink className="text-muted" to="/">Education</NavLink></li>
              <li><NavLink className="text-muted" to="/">Government</NavLink></li>
              <li><NavLink className="text-muted" to="/">Gaming</NavLink></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/">Team</NavLink></li>
              <li><NavLink className="text-muted" to="/">Locations</NavLink></li>
              <li><NavLink className="text-muted" to="/">Privacy</NavLink></li>
              <li><NavLink className="text-muted" to="/">Terms</NavLink></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;