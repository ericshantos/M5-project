"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import {
  buscarReceptorPorId,
  atualizarReceptor,
} from "@/app/services/receptor";
import { Receptor } from "@/app/types/receptor";

// Schema de validação
const schema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  tipo: z.string().min(1, "Tipo obrigatório"),
  endereco: z.string().min(1, "Endereço obrigatório"),
  contato: z.string().min(1, "Contato obrigatório"),
  capacidade_recebimento: z.coerce.number().min(1, "Capacidade inválida"),
  alimentos_recebidos: z.coerce.number().min(0, "Valor inválido"),
});

export default function EditarReceptor() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Receptor>({
    resolver: zodResolver(schema),
  });

  // Buscar dados do receptor atual
  useEffect(() => {
    const fetchReceptor = async () => {
      try {
        const res = await buscarReceptorPorId(id);
        const receptor = res.receptor; // ajusta se sua API retorna com outro nome

        // Preenche os campos no formulário
        Object.entries(receptor).forEach(([key, value]) =>
          setValue(key as keyof Receptor, value)
        );
      } catch (err) {
        setErro("Erro ao carregar dados do receptor");
      } finally {
        setLoading(false);
      }
    };
    fetchReceptor();
  }, [id, setValue]);

  const onSubmit = async (data: Receptor) => {
    try {
      await atualizarReceptor(id, data);
      router.push("/receptor/listar");
    } catch {
      setErro("Erro ao atualizar o receptor.");
    }
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Editar Receptor</h2>
      {erro && <p className="text-red-600 mb-4">{erro}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("nome")} placeholder="Nome" className="input" />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

        <input {...register("tipo")} placeholder="Tipo" className="input" />
        <input {...register("endereco")} placeholder="Endereço" className="input" />
        <input {...register("contato")} placeholder="Contato" className="input" />
        <input type="number" {...register("capacidade_recebimento")} placeholder="Capacidade de recebimento" className="input" />
        <input type="number" {...register("alimentos_recebidos")} placeholder="Alimentos recebidos" className="input" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Atualizar
        </button>
      </form>
    </div>
  );
}
