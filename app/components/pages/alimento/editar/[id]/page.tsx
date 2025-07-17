"use client";

import { useEffect, useState } from "react";
import { atualizarAlimento, buscarAlimentoPorId } from "@/app/services/alimento";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

const schema = z.object({
  nome: z.string().min(1),
  descricao: z.string(),
  peso: z.number(),
  validade: z.string(),
  categoria: z.string(),
  estado: z.string(),
  imagem_url: z.string().url(),
});

export default function EditarAlimento() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    const fetch = async () => {
      const res = await buscarAlimentoPorId(id);
      const alimento = res.alimento; // adapte conforme sua API
      Object.keys(alimento).forEach((key) => setValue(key, alimento[key]));
      setLoading(false);
    };
    fetch();
  }, [id, setValue]);

  const onSubmit = async (data: any) => {
    await atualizarAlimento(id, data);
    router.push("/alimento/listar");
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Editar Alimento</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("nome")} placeholder="Nome" className="input" />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

        <input {...register("descricao")} placeholder="Descrição" className="input" />
        <input type="number" step="0.1" {...register("peso", { valueAsNumber: true })} placeholder="Peso (kg)" className="input" />
        <input type="date" {...register("validade")} className="input" />
        <input {...register("categoria")} placeholder="Categoria" className="input" />
        <input {...register("estado")} placeholder="Estado" className="input" />
        <input {...register("imagem_url")} placeholder="URL da Imagem" className="input" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Atualizar
        </button>
      </form>
    </div>
  );
}
