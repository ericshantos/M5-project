export interface Agendamento {
  id?: string;
  receptor_id: string;
  data: string;
  hora: string;
  status: string;
  observacoes: string;
}
export interface AgendamentoResponse {
  agendamentoController: Agendamento[];
  message: string;
}