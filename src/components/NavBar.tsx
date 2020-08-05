import React from 'react';
import { NavLink } from "react-router-dom";
import {routes} from "../routes/routes";

const NavBar = () => {
    return (
        <div>
            <nav>
                <div>
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                        <NavLink to={routes.home}>Food Ninja</NavLink>
                    </h1>
                </div>
                <ul className="text-gray-700">
                    <li>
                        <NavLink to={routes.main}  activeClassName="font-bold">
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.about} activeClassName="font-bold">
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.contact} activeClassName="font-bold">
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
