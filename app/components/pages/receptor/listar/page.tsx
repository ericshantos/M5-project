"use client";

import { useEffect, useState } from "react";
import { deletarReceptor, listarReceptores } from "@/app/services/receptor";
import { Receptor } from "@/app/types/receptor";
import Link from "next/link";
import "@/styles/globals.css";
export default function ListaReceptores() {
  const [receptores, setReceptores] = useState<Receptor[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await listarReceptores();
      setReceptores(res.receptorController || []);
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Deseja remover esse receptor?")) {
      await deletarReceptor(id);
      setReceptores((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Receptores Cadastrados</h2>
      <Link href="/receptor/cadastro" className="text-blue-600 underline">+ Cadastrar novo</Link>
      <table className="min-w-full mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Contato</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {receptores.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="px-4 py-2">{r.nome}</td>
              <td className="px-4 py-2">{r.tipo}</td>
              <td className="px-4 py-2">{r.contato}</td>
              <td className="px-4 py-2 flex gap-2">
                <Link href={`/receptor/editar/${r.id}`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(r.id!)} className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
