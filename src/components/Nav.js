import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Nav = (props) => {
    return (
        <>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row">
                    <NavLink className="py-2" to="/" title="Product">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <NavLink title="Users" className="py-2 d-none d-md-inline-block ml-5" to="/users">Users</NavLink>
                    <NavLink title="Posts" className="py-2 d-none d-md-inline-block ml-5" to="/posts">Posts</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Nav;