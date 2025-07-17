"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listarEstatisticas, deletarEstatistica } from "@/app/services/estatistica";
import { Estatistica } from "@/app/types/estatistica";

export default function ListaEstatisticas() {
  const [estatisticas, setEstatisticas] = useState<Estatistica[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await listarEstatisticas();
      setEstatisticas(res.estatisticas || []);
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    await deletarEstatistica(id);
    setEstatisticas((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Estatísticas</h2>
      <Link href="/estatisticas/cadastro" className="text-blue-600 underline">+ Nova Estatística</Link>
      <table className="min-w-full mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Quantidade</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {estatisticas.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="px-4 py-2">{e.tipo}</td>
              <td className="px-4 py-2">{e.quantidade}</td>
              <td className="px-4 py-2">{e.data}</td>
              <td className="px-4 py-2">
                <Link href={`/estatisticas/editar/${e.id}`} className="text-blue-600 mr-2">Editar</Link>
                <button onClick={() => handleDelete(e.id!)} className="text-red-600">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
