import { api } from "./api";
import { Agendamento } from "@/app/types/agendamento";

export const cadastrarAgendamento = async (data: Agendamento) => {
  return await api.post("/agendamento/cadastro", data);
};

export const listarAgendamentos = async () => {
  return await api.get("/agendamento");
};

export const buscarAgendamentoPorId = async (id: string) => {
  return await api.get(`/agendamento/${id}`);
};

export const atualizarAgendamento = async (id: string, data: Agendamento) => {
  return await api.put(`/agendamento/atualizar/${id}`, data);
};

export const deletarAgendamento = async (id: string) => {
  return await api.delete(`/agendamento/deletar/${id}`);
};
export const buscarAgendamentoPorReceptor = async (receptorId: string) => {
  return await api.get(`/agendamento/receptor/${receptorId}`);
};