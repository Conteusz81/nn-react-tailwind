import React from 'react';

interface ICardProps {
    img: string;
    name: string;
    recipe: string;
    author: string;
    prepareTime: number;
}

const Card: React.FC<ICardProps> = ({ img, name, recipe, author, prepareTime }) => {
    return (
        <div className="card">
            <img src={img} alt={name} className="w-full h-32 sm:h-48 object-cover"/>
            <div className="m-4">
                <span className="font-bold">{recipe}</span>
                <span className="block text-gray-500 text-sm">Recipe by {author}</span>
            </div>
            <div className="badge">
                <span>{prepareTime} min</span>
            </div>
        </div>
    );
};

export default Card;