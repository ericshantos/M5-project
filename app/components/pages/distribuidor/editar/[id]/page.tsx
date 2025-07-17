"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buscarDistribuidorPorId,
  atualizarDistribuidor,
} from "@/app/services/distribuidor";
import { Distribuidor } from "@/app/types/distribuidor";

// Validação com zod
const schema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  contato: z.string().min(1, "Contato obrigatório"),
  documento: z.string().min(1, "Documento obrigatório"),
  alimentos: z.string().min(1, "Alimentos obrigatórios"),
  regiao_atuacao: z.string().min(1, "Região obrigatória"),
});

export default function EditarDistribuidor() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Distribuidor>({
    resolver: zodResolver(schema),
  });

  // Buscar dados para preencher formulário
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await buscarDistribuidorPorId(id);
        const distribuidor = res.distribuidor;

        Object.entries(distribuidor).forEach(([key, value]) =>
          setValue(key as keyof Distribuidor, value)
        );
      } catch {
        setErro("Erro ao carregar distribuidor.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id, setValue]);

  const onSubmit = async (data: Distribuidor) => {
    try {
      await atualizarDistribuidor(id, data);
      router.push("/distribuidor/listar");
    } catch {
      setErro("Erro ao atualizar distribuidor.");
    }
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Editar Distribuidor</h2>
      {erro && <p className="text-red-600 mb-4">{erro}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("nome")} placeholder="Nome" className="input" />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

        <input {...register("contato")} placeholder="Contato" className="input" />
        <input {...register("documento")} placeholder="Documento" className="input" />
        <input {...register("alimentos")} placeholder="Alimentos vinculados" className="input" />
        <input {...register("regiao_atuacao")} placeholder="Região de atuação" className="input" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Atualizar
        </button>
      </form>
    </div>
  );
}
