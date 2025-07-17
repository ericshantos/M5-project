"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cadastrarDistribuidor } from "@/app/services/distribuidor";
import { useState } from "react";

const schema = z.object({
  nome: z.string().min(1),
  contato: z.string().min(1),
  documento: z.string().min(1),
  alimentos: z.string().min(1),
  regiao_atuacao: z.string().min(1),
});

export default function CadastroDistribuidor() {
  const [mensagem, setMensagem] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await cadastrarDistribuidor(data);
      setMensagem("Distribuidor cadastrado com sucesso!");
      reset();
    } catch {
      setMensagem("Erro ao cadastrar.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Distribuidor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("nome")} placeholder="Nome" className="input" />
        <input {...register("contato")} placeholder="Contato" className="input" />
        <input {...register("documento")} placeholder="Documento" className="input" />
        <input {...register("alimentos")} placeholder="Alimentos vinculados" className="input" />
        <input {...register("regiao_atuacao")} placeholder="Região de atuação" className="input" />
        <button type="submit" className="btn">Cadastrar</button>
      </form>
      {mensagem && <p className="text-blue-600 mt-4">{mensagem}</p>}
    </div>
  );
}
