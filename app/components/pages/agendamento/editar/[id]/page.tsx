"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buscarAgendamentoPorId,
  atualizarAgendamento,
} from "@/app/services/agendamento";
import { Agendamento } from "@/app/types/agendamento";

// Validação com Zod
const schema = z.object({
  receptor_id: z.string().min(1, "Receptor obrigatório"),
  data: z.string().min(1, "Data obrigatória"),
  hora: z.string().min(1, "Hora obrigatória"),
  status: z.string().min(1, "Status obrigatório"),
  observacoes: z.string().optional(),
});

export default function EditarAgendamento() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Agendamento>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await buscarAgendamentoPorId(id);
        const agendamento = res.agendamento;

        Object.entries(agendamento).forEach(([key, value]) =>
          setValue(key as keyof Agendamento, value)
        );
      } catch {
        setErro("Erro ao carregar dados do agendamento.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id, setValue]);

  const onSubmit = async (data: Agendamento) => {
    try {
      await atualizarAgendamento(id, data);
      router.push("/agendamento/listar");
    } catch {
      setErro("Erro ao atualizar agendamento.");
    }
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Editar Agendamento</h2>
      {erro && <p className="text-red-600 mb-4">{erro}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("receptor_id")} placeholder="ID do Receptor" className="input" />
        {errors.receptor_id && <p className="text-red-500 text-sm">{errors.receptor_id.message}</p>}

        <input type="date" {...register("data")} className="input" />
        <input type="time" {...register("hora")} className="input" />
        <input {...register("status")} placeholder="Status" className="input" />
        <textarea {...register("observacoes")} placeholder="Observações" className="input" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Atualizar
        </button>
      </form>
    </div>
  );
}
