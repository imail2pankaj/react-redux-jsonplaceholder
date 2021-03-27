import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Nav = (props) => {
    return (
        <>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <NavLink className="py-2" to="/" title="Product">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <NavLink title="Users" className="py-2 d-none d-md-inline-block" to="/users">Users</NavLink>
                    <NavLink title="Products" className="py-2 d-none d-md-inline-block" to="#">Product</NavLink>
                    <NavLink title="Features" className="py-2 d-none d-md-inline-block" to="#">Features</NavLink>
                    <NavLink title="Enterprise" className="py-2 d-none d-md-inline-block" to="#">Enterprise</NavLink>
                    <NavLink title="Support" className="py-2 d-none d-md-inline-block" to="#">Support</NavLink>
                    <NavLink title="Pricing" className="py-2 d-none d-md-inline-block" to="#">Pricing</NavLink>
                    <NavLink title="Cart" className="py-2 d-none d-md-inline-block" to="#">Cart</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Nav;