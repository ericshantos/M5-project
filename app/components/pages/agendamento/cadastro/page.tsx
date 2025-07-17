"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastrarAgendamento } from "@/app/services/agendamento";
import { useState } from "react";

const schema = z.object({
  receptor_id: z.string().min(1, "Receptor obrigatório"),
  data: z.string().min(1, "Data obrigatória"),
  hora: z.string().min(1, "Hora obrigatória"),
  status: z.string().min(1, "Status obrigatório"),
  observacoes: z.string().optional(),
});

export default function CadastroAgendamento() {
  const [mensagem, setMensagem] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await cadastrarAgendamento(data);
      setMensagem("Agendamento cadastrado com sucesso!");
      reset();
    } catch {
      setMensagem("Erro ao cadastrar agendamento.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Agendamento</h2>
      {mensagem && <p className="text-blue-600 mb-4">{mensagem}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("receptor_id")} placeholder="ID do Receptor" className="input" />
        <input type="date" {...register("data")} className="input" />
        <input type="time" {...register("hora")} className="input" />
        <input {...register("status")} placeholder="Status" className="input" />
        <textarea {...register("observacoes")} placeholder="Observações" className="input" />
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
