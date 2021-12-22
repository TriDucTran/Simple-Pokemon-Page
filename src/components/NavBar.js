import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <img width="60px" height="auto" className="img-responsive" src={Logo} alt="logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pokemon" activeClassName="active">
                        Pokemons
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/berry" activeClassName="active">
                        Berries
                    </NavLink>
                </li>
                <li>
                    <div className="dropdown">
                        <NavLink to="admin" activeClassName="active">
                            Admin
                        </NavLink>
                        <div className="dropdown-content">
                            <NavLink to="admin/pokemon-admin" activeClassName="active">
                                Pokemon
                            </NavLink>
                            <NavLink to="admin/berry-admin" activeClassName="active">
                                Berry
                            </NavLink>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;