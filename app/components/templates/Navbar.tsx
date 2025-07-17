// FileName: MultipleFiles/Navbar.tsx
// FileContents:
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Login from '@components/pages/login/Login'; // Importe o componente de Login

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // Estado para controlar a visibilidade do modal de login

  // Rotas da API
  const apiRoutes = [
    { path: '/api/users', label: '👥 Usuários', name: 'users' },
    { path: '/api/products', label: '📦 Produtos', name: 'products' },
    { path: '/api/orders', label: '📋 Pedidos', name: 'orders' },
    // { path: '/api/auth', label: '🔒 Autenticação', name: 'auth' }, // Removido, pois o login será um modal
  ];

  return (
    <header className="bg-gray-900 text-gray-100 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e navegação principal */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl mr-2 text-green-400">{'<API/>'}</span>
              <span className="font-bold text-lg text-white">API Explorer</span>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <ul className="flex space-x-8">
                {apiRoutes.map((route) => (
                  <li key={route.name}>
                    <Link
                      href={route.path}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                        pathname.startsWith(route.path)
                          ? 'border-green-400 text-green-400'
                          : 'border-transparent text-gray-300 hover:border-gray-500 hover:text-white'
                      }`}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Botão de Login e Menu mobile */}
          <div className="flex items-center">
            <button
              onClick={() => setShowLoginModal(true)} // Abre o modal de login
              className="hidden md:block px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 mr-4"
            >
              Login
            </button>

            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
                aria-label="Menu"
              >
                <span className="text-xl">{mobileMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile (dropdown) */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 bg-gray-800">
          <ul>
            {apiRoutes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
                    pathname.startsWith(route.path)
                      ? 'bg-gray-700 border-green-400 text-green-400'
                      : 'border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setShowLoginModal(true);
                  setMobileMenuOpen(false); // Fecha o menu mobile ao abrir o modal
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal de Login */}
      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
    </header>
  );
}
