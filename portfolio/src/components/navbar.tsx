import React from "react";

type NavbarProps = {
    onNavClick: (section: string) => void;
};

export default function Navbar({ onNavClick }: NavbarProps) {
    return (
        <nav className="fixed w-screen font-sans py-4 xl:px-8 bg-nav-cl">
            <div className="w-full h-full flex items-center place-content-between">
                <div className="flex space-x-4 mr-4 lg:mr-16"></div>
                <ul className="flex space-x-8 p-4 justify-center text-white font-medium">

                    <li>
                        <button
                            onClick={() => onNavClick("home")}
                            className="hover:text-indigo-600 transition-colors duration-200"
                            aria-label="Navigate to Home section"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onNavClick("about")}
                            className="hover:text-indigo-600 transition-colors duration-200"
                            aria-label="Navigate to About section"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onNavClick("projects")}
                            className="hover:text-indigo-600 transition-colors duration-200"
                            aria-label="Navigate to Projects section"
                        >
                            Projects
                        </button>
                    </li>

                </ul>
            </div>
        </nav >
    );
}
