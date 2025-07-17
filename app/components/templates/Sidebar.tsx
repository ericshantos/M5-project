"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0 p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Painel</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="hover:text-blue-300">🏠 Início</Link>

        <Link href="/alimento/listar" className="hover:text-blue-300">🍎 Alimentos</Link>
        <Link href="/doacao/listar" className="hover:text-blue-300">🎁 Doações</Link>
        <Link href="/distribuidor/listar" className="hover:text-blue-300">🏭 Distribuidores</Link>
        <Link href="/receptor/listar" className="hover:text-blue-300">📥 Receptores</Link>
        <Link href="/agendamento/listar" className="hover:text-blue-300">📅 Agendamentos</Link>
        <Link href="/notificacoes/listar" className="hover:text-blue-300">🔔 Notificações</Link>
        <Link href="/estatisticas/listar" className="hover:text-blue-300">📊 Estatísticas</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
