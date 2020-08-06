import React from 'react';
import { NavLink } from "react-router-dom";
import {routes} from "../routes/routes";
import { FiHome } from 'react-icons/fi'
import { FaRegQuestionCircle, FaRegEnvelope } from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className="md:col-span-1">
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
                            <FiHome className="w-5"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.about} activeClassName="font-bold">
                            <span>About</span>
                            <FaRegQuestionCircle className="w-5" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.contact} activeClassName="font-bold">
                            <span>Contact</span>
                            <FaRegEnvelope className="w-5" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
