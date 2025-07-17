import { api } from "./api";
import { Receptor } from "@/app/types/receptor";

export const cadastrarReceptor = async (data: Receptor) => {
  const res = await api.post("/receptor/cadastro", data);
  return res.data;
};

export const listarReceptores = async () => {
  const res = await api.get("/receptor");
  return res.data;
};

export const buscarReceptorPorId = async (id: string) => {
  const res = await api.get(`/receptor/${id}`);
  return res.data;
};

export const atualizarReceptor = async (id: string, data: Receptor) => {
  const res = await api.put(`/receptor/atualizar/${id}`, data);
  return res.data;
};

export const deletarReceptor = async (id: string) => {
  const res = await api.delete(`/receptor/deletar/${id}`);
  return res.data;
};
export const buscarReceptorPorNome = async (nome: string) => {
  const res = await api.get(`/receptor/nome/${nome}`);
  return res.data;
};