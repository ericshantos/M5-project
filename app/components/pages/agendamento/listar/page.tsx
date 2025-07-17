"use client";

import { useEffect, useState } from "react";
import { listarAgendamentos, deletarAgendamento } from "@/app/services/agendamento";
import { Agendamento } from "@/app/types/agendamento";
import Link from "next/link";

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await listarAgendamentos();
      setAgendamentos(res.agendamento || []);
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Deseja excluir este agendamento?")) {
      await deletarAgendamento(id);
      setAgendamentos((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Agendamentos</h2>
      <Link href="/agendamento/cadastro" className="text-blue-600 underline">+ Novo Agendamento</Link>

      <table className="min-w-full mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Receptor</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Hora</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="px-4 py-2">{a.receptor_id}</td>
              <td className="px-4 py-2">{a.data}</td>
              <td className="px-4 py-2">{a.hora}</td>
              <td className="px-4 py-2">{a.status}</td>
              <td className="px-4 py-2 flex gap-2">
                <Link href={`/agendamento/editar/${a.id}`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(a.id!)} className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
