import React from 'react';
import stewImg from "../assets/img/stew.jpg";

const Main = () => {
    return (
        <div>
            <div>
                <a href="#">Log in</a>
                <a href="#">Sign up</a>
            </div>

            <header>
                <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>

            <div>
                <h4 className="font-bold">Latest Recipes</h4>

                <div>
                    {/*cards go here*/}
                    <div>
                        <img src={stewImg} alt="stew" />
                            <div>
                                <span>5 Bean Chili Stew</span>
                                <span>Recipe by Mario</span>
                            </div>
                    </div>
                </div>

                <h4 className="font-bold">Most Popular</h4>

                <div>
                    {/*cards go here*/}
                </div>
            </div>

            <div>
                <div>Load more</div>
            </div>
        </div>
    );
};

export default Main;
