"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cadastrarAlimento } from "@/app/services/alimento";
import { useState } from "react";

const schema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  descricao: z.string(),
  peso: z.number().min(0.1, "Peso mínimo é 0.1kg"),
  validade: z.string(),
  categoria: z.string(),
  estado: z.string(),
  imagem_url: z.string().url("URL inválida"),
});

export default function CadastroAlimento() {
  const [mensagem, setMensagem] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    try {
      await cadastrarAlimento(data);
      setMensagem("Alimento cadastrado com sucesso!");
      reset();
    } catch (err) {
      setMensagem("Erro ao cadastrar alimento.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Alimento</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input {...register("nome")} placeholder="Nome" className="input" />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
        </div>

        <input {...register("descricao")} placeholder="Descrição" className="input" />
        <input type="number" step="0.1" {...register("peso", { valueAsNumber: true })} placeholder="Peso (kg)" className="input" />
        <input type="date" {...register("validade")} className="input" />
        <input {...register("categoria")} placeholder="Categoria" className="input" />
        <input {...register("estado")} placeholder="Estado" className="input" />
        <input {...register("imagem_url")} placeholder="URL da Imagem" className="input" />

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Cadastrar
        </button>
      </form>
      {mensagem && <p className="mt-4 text-blue-600">{mensagem}</p>}
    </div>
  );
}
