import { api } from "./api";
import { Distribuidor } from "@/app/types/distribuidor";

export const cadastrarDistribuidor = async (data: Distribuidor) => {
  const res = await api.post("/distribuidor/cadastro", data);
  return res.data;
};

export const listarDistribuidores = async () => {
  const res = await api.get("/distribuidor");
  return res.data;
};

export const buscarDistribuidorPorId = async (id: string) => {
  const res = await api.get(`/distribuidor/${id}`);
  return res.data;
};

export const atualizarDistribuidor = async (id: string, data: Distribuidor) => {
  const res = await api.put(`/distribuidor/atualizar/${id}`, data);
  return res.data;
};

export const deletarDistribuidor = async (id: string) => {
  const res = await api.delete(`/distribuidor/deletar/${id}`);
  return res.data;
};
export const buscarDistribuidorPorNome = async (nome: string) => {
  const res = await api.get(`/distribuidor/nome/${nome}`);
  return res.data;
};