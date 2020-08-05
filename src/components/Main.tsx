import React from 'react';
import stewImg from "../assets/img/stew.jpg";

const Main = () => {
    return (
        <div className="px-16 py-6">
            <div className="flex justify-end">
                <a href="#" className="text-primary">Log in</a>
                <a href="#" className="text-primary ml-2">Sign up</a>
            </div>

            <header>
                <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

                <div className="mt-8">
                    {/*cards go here*/}
                    <div>
                        <img src={stewImg} alt="stew" />
                            <div>
                                <span>5 Bean Chili Stew</span>
                                <span>Recipe by Mario</span>
                            </div>
                    </div>
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

                <div className="mt-8">
                    {/*cards go here*/}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-secondary-100 text-secondary-200">Load more</div>
            </div>
        </div>
    );
};

export default Main;
