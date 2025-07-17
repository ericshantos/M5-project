import { api } from "./api";
import { Estatistica } from "@/app/types/estatistica";

export const cadastrarEstatistica = async (data: Estatistica) => {
  return await api.post("/estatisticas/cadastro", data);
};

export const listarEstatisticas = async () => {
  return await api.get("/estatisticas");
};

export const buscarEstatisticaPorId = async (id: string) => {
  return await api.get(`/estatisticas/${id}`);
};

export const atualizarEstatistica = async (id: string, data: Estatistica) => {
  return await api.put(`/estatisticas/atualizar/${id}`, data);
};

export const deletarEstatistica = async (id: string) => {
  return await api.delete(`/estatisticas/deletar/${id}`);
};
export const buscarEstatisticaPorTipo = async (tipo: string) => {
  return await api.get(`/estatisticas/tipo/${tipo}`);
};