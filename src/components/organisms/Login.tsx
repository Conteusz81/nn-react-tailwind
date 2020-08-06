import React from 'react';
import Header from "../molecules/Header";
import { IPathNameProps } from "../../utils/interfaces";

const Login: React.FC<IPathNameProps> = ({pathname}) => {
    return (
        <div>
            <Header title={pathname} />
        </div>
    );
};

export default Login;
