// MultipleFiles/Sidebar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HomeIcon,
  GiftIcon, // Placeholder
  BuildingStorefrontIcon, // Placeholder
  InboxStackIcon, // Placeholder
  CalendarDaysIcon, // Placeholder
  BellIcon, // Placeholder
  ChartBarIcon, // Placeholder
} from '@heroicons/react/24/outline'; // Example icons from Heroicons

// You'll need to install @heroicons/react: npm install @heroicons/react

const Sidebar = () => {
  const navItems = [
    { href: "/", icon: HomeIcon, label: "Início" },
    { href: "/alimento/listar", label: "Alimentos" },
    { href: "/doacao/listar", icon: GiftIcon, label: "Doações" },
    { href: "/distribuidor/listar", icon: BuildingStorefrontIcon, label: "Distribuidores" },
    { href: "/receptor/listar", icon: InboxStackIcon, label: "Receptores" },
    { href: "/agendamento/listar", icon: CalendarDaysIcon, label: "Agendamentos" },
    { href: "/notificacoes/listar", icon: BellIcon, label: "Notificações" },
    { href: "/estatisticas/listar", icon: ChartBarIcon, label: "Estatísticas" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0 p-6 space-y-6 flex flex-col shadow-lg dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-heading font-bold mb-6 text-primary-light"
      >
        Painel
      </motion.h2>
      <nav className="flex flex-col space-y-3 flex-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
            className="rounded-md"
          >
            <Link href={item.href} className="flex items-center p-3 text-lg rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-200">
              {/* <item.icon className="h-6 w-6 mr-3 text-secondary-light" /> */}
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
      {/* Optional: Add a footer or version info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
        className="text-sm text-gray-400 mt-auto pt-4 border-t border-gray-700 dark:border-gray-800"
      >
        <p>&copy; {new Date().getFullYear()} FoodFlow. Todos os direitos reservados.</p>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
