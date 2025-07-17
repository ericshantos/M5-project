"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cadastrarNotificacao } from "@/app/services/notificacao";
import { useState } from "react";

const schema = z.object({
  mensagem: z.string().min(1),
  data: z.string().min(1),
  tipo: z.string().min(1),
});

export default function CadastroNotificacao() {
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
      await cadastrarNotificacao(data);
      setMensagem("Notificação cadastrada!");
      reset();
    } catch {
      setMensagem("Erro ao cadastrar.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Notificação</h2>
      {mensagem && <p className="text-blue-600">{mensagem}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("mensagem")} placeholder="Mensagem" className="input" />
        <input type="date" {...register("data")} className="input" />
        <input {...register("tipo")} placeholder="Tipo" className="input" />
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
