import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import Photo from "/assets/home.png"; // replace with your photo path

const Home = () => {
    return (
        <div className="flex flex-wrap h-full justify-between">

            {/* Text + Scroll down button */}
            <div className="flex-1 flex flex-col w-full xl:w-min justify-center items-end">

                {/* Greeting text */}
                <h1 className="xl:text-5xl md:text-4xl sm:text-3xl font-montserrat-bold leading-tight xl:mb-10 md:mb-5 sm:mr-0">
                    I’m Marvin,<br />an IT student<br />at QUT
                </h1>

                {/* Scroll down arrow */}
                <button
                    aria-label="Scroll Down"
                    className="xl:text-6xl md:text-5xl sm:text-5xl px-10 py-10 duration-300 xl:mr-20 md:mr-10 sm:mr-0"
                >
                    <FaCircleChevronDown />
                </button>

            </div>

            {/* Center Photo */}
            <div className="flex-1 flex justify-center items-end w-full xl:w-auto">
                <img
                    src={Photo}
                    alt="Marvin"
                    className="sm:w-90 md:w-120 xl:w-120"
                />
            </div>

            {/* Right info */}
            <div className="flex-1 flex flex-col justify-center items-baseline w-full xl:w-auto text-xl px-10">
                <div>
                    <h2 className="mb-2 font-montserrat-bold">About</h2>
                    <p className="mb-10 font-montserrat">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam dolore, sit in reprehenderit fuga optio odit possimus repellendus a porro modi delectus non beatae quis adipisci corporis amet consectetur. Dolore dicta reprehenderit, rerum cumque voluptatibus cupiditate sit fugiat! Commodi aperiam velit sit quidem cumque odit reprehenderit nihil aut eveniet!</p>
                </div>
                <div>
                    <h2 className="font-montserrat-bold mb-2">Follow me</h2>
                    <div className="flex space-x-4 font-montserrat">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, impedit!
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;
