export interface Estatistica {
  id?: string;
  tipo: string;
  quantidade: number;
  data: string;
}
export interface EstatisticaResponse {
  estatisticaController: Estatistica[];
  message: string;
}