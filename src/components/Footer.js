import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = (props) => {
  return (
    <>
      <footer className="container py-5 border-top mt-5">
        <div className="row">
          <div className="col-12 col-md">
            <img src={logo} alt="logo" />
            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
          </div>
          <div className="col-6 col-md">
            {/* <h5>Menu 1</h5> */}
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/">Home</NavLink></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            {/* <h5>Resources</h5> */}
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/users">Users</NavLink></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            {/* <h5>Resources</h5> */}
            <ul className="list-unstyled text-small">
              <li><NavLink className="text-muted" to="/posts">Posts</NavLink></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;