"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buscarDoacaoPorId,
  atualizarDoacao,
} from "@/app/services/doacao";
import { Doacao } from "@/app/types/doacao";

// Validação com zod
const schema = z.object({
  alimento_nome: z.string().min(1, "Nome do alimento obrigatório"),
  quantidade: z.coerce.number().min(1, "Quantidade deve ser maior que zero"),
  doador_nome: z.string().min(1, "Nome do doador obrigatório"),
  data_doacao: z.string().min(1, "Data obrigatória"),
  localizacao: z.string().min(1, "Localização obrigatória"),
  validado: z.coerce.boolean(),
});

export default function EditarDoacao() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Doacao>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await buscarDoacaoPorId(id);
        const doacao = res.doacao;

        Object.entries(doacao).forEach(([key, value]) =>
          setValue(key as keyof Doacao, value)
        );
      } catch {
        setErro("Erro ao carregar dados da doação.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id, setValue]);

  const onSubmit = async (data: Doacao) => {
    try {
      await atualizarDoacao(id, data);
      router.push("/doacao/listar");
    } catch {
      setErro("Erro ao atualizar doação.");
    }
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Editar Doação</h2>
      {erro && <p className="text-red-600 mb-4">{erro}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("alimento_nome")} placeholder="Alimento" className="input" />
        {errors.alimento_nome && <p className="text-red-500 text-sm">{errors.alimento_nome.message}</p>}

        <input type="number" {...register("quantidade")} placeholder="Quantidade" className="input" />
        <input {...register("doador_nome")} placeholder="Doador" className="input" />
        <input type="date" {...register("data_doacao")} className="input" />
        <input {...register("localizacao")} placeholder="Localização" className="input" />

        <select {...register("validado")} className="input">
          <option value="">Selecionar status</option>
          <option value="true">Validado</option>
          <option value="false">Não validado</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Atualizar
        </button>
      </form>
    </div>
  );
}
