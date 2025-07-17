"use client";

import { useEffect, useState } from "react";
import { deletarDistribuidor, listarDistribuidores } from "@/app/services/distribuidor";
import { Distribuidor } from "@/app/types/distribuidor";
import Link from "next/link";

export default function ListaDistribuidores() {
  const [distribuidores, setDistribuidores] = useState<Distribuidor[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await listarDistribuidores();
      setDistribuidores(res.distribuidorController || []);
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Deseja remover este distribuidor?")) {
      await deletarDistribuidor(id);
      setDistribuidores((prev) => prev.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Distribuidores</h2>
      <Link href="/distribuidor/cadastro" className="text-blue-600 underline">+ Cadastrar novo</Link>
      <table className="min-w-full mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Região</th>
            <th className="px-4 py-2">Contato</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {distribuidores.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="px-4 py-2">{d.nome}</td>
              <td className="px-4 py-2">{d.regiao_atuacao}</td>
              <td className="px-4 py-2">{d.contato}</td>
              <td className="px-4 py-2 flex gap-2">
                <Link href={`/distribuidor/editar/${d.id}`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(d.id!)} className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
