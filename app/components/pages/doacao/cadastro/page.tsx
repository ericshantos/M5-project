"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastrarDoacao } from "@/app/services/doacao";
import { useState } from "react";

const schema = z.object({
  alimento_nome: z.string().min(1, "Campo obrigatório"),
  quantidade: z.coerce.number().min(1, "Quantidade deve ser maior que zero"),
  doador_nome: z.string().min(1, "Campo obrigatório"),
  data_doacao: z.string().min(1, "Data obrigatória"),
  localizacao: z.string().min(1, "Campo obrigatório"),
  validado: z.coerce.boolean(),
});

export default function CadastroDoacao() {
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
      await cadastrarDoacao(data);
      setMensagem("Doação cadastrada com sucesso!");
      reset();
    } catch {
      setMensagem("Erro ao cadastrar doação.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Doação</h2>
      {mensagem && <p className="mb-4 text-blue-600">{mensagem}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("alimento_nome")} placeholder="Alimento" className="input" />
        <input type="number" {...register("quantidade")} placeholder="Quantidade" className="input" />
        <input {...register("doador_nome")} placeholder="Nome do Doador" className="input" />
        <input type="date" {...register("data_doacao")} className="input" />
        <input {...register("localizacao")} placeholder="Localização" className="input" />
        <select {...register("validado")} className="input">
          <option value="">Validado?</option>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
}
