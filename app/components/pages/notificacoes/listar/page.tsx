"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listarNotificacoes, deletarNotificacao } from "@/app/services/notificacao";
import { Notificacao } from "@/app/types/notificacao";

export default function ListaNotificacoes() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await listarNotificacoes();
      setNotificacoes(res.notificacoes || []);
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    await deletarNotificacao(id);
    setNotificacoes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Notificações</h2>
      <Link href="/notificacoes/cadastro" className="text-blue-600 underline">+ Nova Notificação</Link>
      <table className="min-w-full mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Mensagem</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {notificacoes.map((n) => (
            <tr key={n.id} className="border-t">
              <td className="px-4 py-2">{n.mensagem}</td>
              <td className="px-4 py-2">{n.data}</td>
              <td className="px-4 py-2">{n.tipo}</td>
              <td className="px-4 py-2">
                <Link href={`/notificacoes/editar/${n.id}`} className="text-blue-600 mr-2">Editar</Link>
                <button onClick={() => handleDelete(n.id!)} className="text-red-600">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
