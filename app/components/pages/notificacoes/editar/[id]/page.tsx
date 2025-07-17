"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buscarNotificacaoPorId,
  atualizarNotificacao,
} from "@/app/services/notificacao";
import { Notificacao } from "@/app/types/notificacao";

const schema = z.object({
  mensagem: z.string().min(1),
  data: z.string().min(1),
  tipo: z.string().min(1),
});

export default function EditarNotificacao() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<Notificacao>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await buscarNotificacaoPorId(id);
      const noti = res.notificacao;
      Object.entries(noti).forEach(([k, v]) => setValue(k as any, v));
      setLoading(false);
    };
    fetch();
  }, [id, setValue]);

  const onSubmit = async (data: Notificacao) => {
    await atualizarNotificacao(id, data);
    router.push("/notificacoes/listar");
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Editar Notificação</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("mensagem")} placeholder="Mensagem" className="input" />
        <input type="date" {...register("data")} className="input" />
        <input {...register("tipo")} placeholder="Tipo" className="input" />
        <button className="btn">Atualizar</button>
      </form>
    </div>
  );
}
