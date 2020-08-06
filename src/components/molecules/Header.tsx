import React from 'react';
import { IPageTitleProps } from "../../utils/interfaces";

const Header: React.FC<IPageTitleProps> = ({title, children}) => {
    return (
        <header>
            <h2 className="text-gray-700 text-6xl font-semibold capitalize">{title}</h2>
            {children}
        </header>
    );
};

export default Header;
