"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buscarEstatisticaPorId,
  atualizarEstatistica,
} from "@/app/services/estatistica";
import { Estatistica } from "@/app/types/estatistica";

const schema = z.object({
  tipo: z.string().min(1),
  quantidade: z.coerce.number().min(1),
  data: z.string().min(1),
});

export default function EditarEstatistica() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<Estatistica>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await buscarEstatisticaPorId(id);
      const estat = res.estatistica;
      Object.entries(estat).forEach(([k, v]) => setValue(k as any, v));
      setLoading(false);
    };
    fetch();
  }, [id, setValue]);

  const onSubmit = async (data: Estatistica) => {
    await atualizarEstatistica(id, data);
    router.push("/estatisticas/listar");
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Editar Estatística</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("tipo")} placeholder="Tipo" className="input" />
        <input type="number" {...register("quantidade")} placeholder="Quantidade" className="input" />
        <input type="date" {...register("data")} className="input" />
        <button className="btn">Atualizar</button>
      </form>
    </div>
  );
}
