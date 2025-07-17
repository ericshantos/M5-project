// MultipleFiles/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="bg-background-DEFAULT dark:bg-background-dark text-text-DEFAULT dark:text-text-dark py-4 px-6 shadow-md lg:ml-0 transition-colors duration-300 flex justify-between items-center">
      <h1 className="text-xl font-heading font-semibold">Sistema de Gerenciamento</h1>
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </motion.button>

        {/* Mobile Menu Button (hidden on large screens) */}
        <button className="lg:hidden p-2 rounded-md text-text-DEFAULT dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
