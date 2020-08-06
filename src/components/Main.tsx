import React from "react";
import Card from "./Card";
import stewImg from "../assets/img/stew.jpg";
import curryImg from "../assets/img/curry.jpg";
import noodlesImg from "../assets/img/noodles.jpg";

const mockupRecipes = [
    {
        id: 1,
        img: stewImg,
        name: "stew",
        recipe: "5 Bean Chilli Stew",
        author: "Mario",
        prepareTime: 25
    },
    {
        id: 2,
        img: curryImg,
        name: "curry",
        recipe: "Tofu Curry",
        author: "Mario",
        prepareTime: 25
    },
    {
        id: 3,
        img: noodlesImg,
        name: "noodles",
        recipe: "Veg Noodles",
        author: "Mario",
        prepareTime: 25
    }
];


const Main = () => {
    return (
        <div className="px-16 py-6 bg-gray-100 md:col-span-2">
            <div className="flex justify-center md:justify-end">
                <a href="#" className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
                <a href="#" className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</a>
            </div>

            <header>
                <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    { mockupRecipes.map(recipe => <Card key={recipe.id} {...recipe}/> )}
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
                <div className="mt-8">
                    {/*cards go here*/}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</div>
            </div>
        </div>
    );
};

export default Main;
