'use client'; // Adicione essa linha no topo do arquivo

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Interface para tipar os itens de navegação
interface NavItem {
  path: string;
  emoji: string;
  label: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems: NavItem[] = [
    { path: '/', emoji: '🏠', label: 'Dashboard' },
    { path: '/products', emoji: '📦', label: 'Produtos' },
    { path: '/customers', emoji: '👥', label: 'Clientes' },
    { path: '/orders', emoji: '📋', label: 'Pedidos' },
    { path: '/reports', emoji: '📊', label: 'Relatórios' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm hidden lg:block fixed h-full border-r">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold flex items-center">
          <span className="mr-2">📊</span> Painel Admin
        </h1>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === item.path 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'hover:bg-gray-50 text-gray-600'
                }`}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                <span className="text-lg mr-3" aria-hidden="true">
                  {item.emoji}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
