"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listarDoacoes, deletarDoacao } from "@/app/services/doacao";
import { Doacao } from "@/app/types/doacao";

export default function ListaDoacoes() {
  const [doacoes, setDoacoes] = useState<Doacao[]>([]);

  useEffect(() => {
  const fetch = async () => {
    const res = await listarDoacoes();
    setDoacoes(res.doacao || []); 
  };
  fetch();
}, []);


  const handleDelete = async (id: string) => {
    if (confirm("Deseja remover esta doação?")) {
      await deletarDoacao(id);
      setDoacoes((prev) => prev.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Doações Cadastradas</h2>
      <Link href="/doacao/cadastro" className="text-blue-600 underline">+ Nova Doação</Link>
      <table className="min-w-full mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Alimento</th>
            <th className="px-4 py-2">Quantidade</th>
            <th className="px-4 py-2">Doador</th>
            <th className="px-4 py-2">Validação</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {doacoes.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="px-4 py-2">{d.alimento_nome}</td>
              <td className="px-4 py-2">{d.quantidade}</td>
              <td className="px-4 py-2">{d.doador_nome}</td>
              <td className="px-4 py-2">{d.validado ? "Sim" : "Não"}</td>
              <td className="px-4 py-2 flex gap-2">
                <Link href={`/doacao/editar/${d.id}`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(d.id!)} className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
