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
        <nav className="fixed top-0 left-0 w-full bg-nav-cl text-white font-montserrat-bold flex items-center justify-between px-8 py-4 z-30">
            <div className="flex items-center space-x-3">
                <MdHomeFilled className="h-6 w-6" />
                <span className="text-xl">Marvin</span>
            </div>
            <ul className="flex space-x-8 text-lg">
                {navItems.map(({ id, label }) => (
                    <li key={id}>
                        <button
                            onClick={() => onNavClick(id)}
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
