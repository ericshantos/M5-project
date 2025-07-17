"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cadastrarReceptor } from "@/app/services/receptor";
import { useState } from "react";

const schema = z.object({
  nome: z.string().min(1),
  tipo: z.string(),
  endereco: z.string(),
  contato: z.string(),
  capacidade_recebimento: z.number(),
  alimentos_recebidos: z.number(),
});

export default function CadastroReceptor() {
  const [mensagem, setMensagem] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await cadastrarReceptor(data);
      setMensagem("Receptor cadastrado!");
      reset();
    } catch {
      setMensagem("Erro ao cadastrar receptor");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Receptor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("nome")} placeholder="Nome" className="input" />
        <input {...register("tipo")} placeholder="Tipo" className="input" />
        <input {...register("endereco")} placeholder="Endereço" className="input" />
        <input {...register("contato")} placeholder="Contato" className="input" />
        <input type="number" {...register("capacidade_recebimento", { valueAsNumber: true })} placeholder="Capacidade" className="input" />
        <input type="number" {...register("alimentos_recebidos", { valueAsNumber: true })} placeholder="Alimentos Recebidos" className="input" />

        <button type="submit" className="btn">Cadastrar</button>
      </form>
      {mensagem && <p className="mt-4 text-blue-600">{mensagem}</p>}
    </div>
  );
}
