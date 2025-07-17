import { api } from "./api";
import { Alimento } from "@/app/types/alimento";

export const cadastrarAlimento = async (data: Alimento) => {
  const response = await api.post("/alimento/cadastro", data);
  return response.data;
};

export const listarAlimentos = async () => {
  const response = await api.get("/alimento");
  return response.data;
};
export const atualizarAlimento = async (id: string, data: Alimento) => {
  const response = await api.put(`/alimento/${id}`, data);
  return response.data;
};

export const buscarAlimentoPorId = async (id: string) => {
  const res = await api.get(`/alimento/${id}`);
  return res.data;
};
export const deletarAlimento = async (id: string) => {
  const res = await api.delete(`/alimento/${id}`);
  return res.data;
};