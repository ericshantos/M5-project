import { api } from "./api";
import { Notificacao } from "@/app/types/notificacao";

export const cadastrarNotificacao = async (data: Notificacao) => {
  return await api.post("/notificacoes/cadastro", data);
};

export const listarNotificacoes = async () => {
  return await api.get("/notificacoes");
};

export const buscarNotificacaoPorId = async (id: string) => {
  return await api.get(`/notificacoes/${id}`);
};

export const atualizarNotificacao = async (id: string, data: Notificacao) => {
  return await api.put(`/notificacoes/atualizar/${id}`, data);
};

export const deletarNotificacao = async (id: string) => {
  return await api.delete(`/notificacoes/deletar/${id}`);
};
export const buscarNotificacaoPorTipo = async (tipo: string) => {
  return await api.get(`/notificacoes/tipo/${tipo}`);
};