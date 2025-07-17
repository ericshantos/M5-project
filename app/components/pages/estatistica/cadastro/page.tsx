"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastrarEstatistica } from "@/app/services/estatistica";
import { useState } from "react";

const schema = z.object({
  tipo: z.string().min(1),
  quantidade: z.coerce.number().min(1),
  data: z.string().min(1),
});

export default function CadastroEstatistica() {
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
      await cadastrarEstatistica(data);
      setMensagem("Estatística cadastrada!");
      reset();
    } catch {
      setMensagem("Erro ao cadastrar estatística.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Estatística</h2>
      {mensagem && <p className="text-blue-600">{mensagem}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("tipo")} placeholder="Tipo" className="input" />
        <input type="number" {...register("quantidade")} placeholder="Quantidade" className="input" />
        <input type="date" {...register("data")} className="input" />
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
