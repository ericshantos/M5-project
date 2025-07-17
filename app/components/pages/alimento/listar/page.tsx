"use client";

import { useEffect, useState } from "react";
import { listarAlimentos } from "@/app/services/alimento";
import { Alimento } from "@/app/types/alimento";

export default function ListaAlimentos() {
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await listarAlimentos();
      setAlimentos(res.alimentoController || []);
    };
    fetch();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Lista de Alimentos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Categoria</th>
              <th className="px-4 py-2">Validade</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {alimentos.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50 text-sm">
                <td className="px-4 py-2">{a.nome}</td>
                <td className="px-4 py-2">{a.categoria}</td>
                <td className="px-4 py-2">{a.validade}</td>
                <td className="px-4 py-2">{a.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
