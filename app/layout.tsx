"use client";

import "./globals.css";
import Sidebar from "@/app/components/templates/Sidebar";
import Navbar from "@/app/components/templates/Navbar";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function RootLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      document.body.classList.toggle('dark', JSON.parse(savedMode));
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      document.body.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <html lang="pt-BR" className={darkMode ? 'dark' : ''}>
      <head>
        <title>Painel Administrativo</title>
        <meta name="description" content="Sistema de gestão de alimentos e doações" />
      </head>
      <body className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 flex flex-col lg:ml-64">
          <Navbar toggleDarkMode = {toggleDarkMode} darkMode={darkMode} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-6 flex-1 bg-background-DEFAULT dark:bg-background-dark transition-colors duration-300"
          >
            {children}
          </motion.div>
        </main>
      </body>
    </html>
  );
}
