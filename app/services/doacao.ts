import { api } from "./api";
import { Doacao } from "@/app/types/doacao";

export const cadastrarDoacao = async (data: Doacao) => {
  return await api.post("/doacao/cadastro", data);
};

export const listarDoacoes = async () => {
  return await api.get("/doacao");
};

export const buscarDoacaoPorId = async (id: string) => {
  return await api.get(`/doacao/${id}`);
};

export const atualizarDoacao = async (id: string, data: Doacao) => {
  return await api.put(`/doacao/atualizar/${id}`, data);
};

export const deletarDoacao = async (id: string) => {
  return await api.delete(`/doacao/deletar/${id}`);
};
export const buscarDoacaoPorNome = async (nome: string) => {
  return await api.get(`/doacao/nome/${nome}`);
};