import React from 'react';
import stewImg from "../assets/img/stew.jpg";

const Card = () => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-md">
            <img src={stewImg} alt="stew" className="w-full h-32 sm:h-48 object-cover"/>
            <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
        </div>
    );
};

export default Card;
