import React from "react";
import { MdHomeFilled } from "react-icons/md";

interface NavbarProps {
    onNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "project", label: "Project" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full xl:px-8 py-4 z-30 bg-nav-cl
                         text-white font-montserrat-bold 
                         flex items-center justify-between ">
            {/* Area for home button */}
            <div className="flex items-center space-x-3 px-4 cursor-pointer">
                <MdHomeFilled className="h-6 w-6" />
                <span className="text-xl">Marvin</span>
            </div>

            {/* Area for button */}
            <ul className="flex space-x-6 text-xl">
                {navItems.map(({ id, label }) => (
                    <li key={id}>
                        <button
                            onClick={() => onNavClick(id)}
                            className="hover:text-nav-cl hover:bg-white hover: rounded-2xl px-4 py-2 transition-colors duration-300 cursor-pointer"
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
