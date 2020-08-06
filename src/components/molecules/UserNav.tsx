import React from 'react';
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const UserNav = () => {
    return (
        <div className="flex justify-center md:justify-end">
            <Link to={routes.login} className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</Link>
            <Link to={routes.register} className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</Link>
        </div>
    );
};

export default UserNav;
