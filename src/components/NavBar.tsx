import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {routes} from "../routes/routes";
import { FiHome, FiMenu } from 'react-icons/fi'
import { FaRegQuestionCircle, FaRegEnvelope } from 'react-icons/fa'

const NavBar = () => {

    const [isMenuHidden, setMenuVisibility] = useState<boolean>(true);

    const menuListClasses = cx('text-gray-700 text-sm mt-6 md:block', {
         'hidden': isMenuHidden,
    });

    return (
        <div className="md:col-span-1 md:flex md: justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                        <NavLink to={routes.home}>Food Ninja</NavLink>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden" onClick={() => setMenuVisibility(prevState => !prevState)}>
                        <FiMenu size={30} />
                    </div>
                </div>
                <ul className={menuListClasses}>
                    <li className="py-1">
                        <NavLink to={routes.main} className="px-4 flex justify-end border-r-4 border-white" activeClassName="font-bold  border-primary">
                            <span>Home</span>
                            <FiHome className="w-4 h-5 ml-2"/>
                        </NavLink>
                    </li>
                    <li className="py-1">
                        <NavLink to={routes.about} className="px-4 flex justify-end border-r-4 border-white" activeClassName="font-bold border-primary">
                            <span>About</span>
                            <FaRegQuestionCircle className="w-4 h-5 ml-2" />
                        </NavLink>
                    </li>
                    <li className="py-1">
                        <NavLink to={routes.contact} className="px-4 flex justify-end border-r-4 border-white" activeClassName="font-bold border-primary">
                            <span>Contact</span>
                            <FaRegEnvelope className="w-4 h-5 ml-2" />
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default NavBar;
