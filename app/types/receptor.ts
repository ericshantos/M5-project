export interface Receptor {
  id?: string;
  nome: string;
  tipo: string;
  endereco: string;
  contato: string;
  capacidade_recebimento: number;
  alimentos_recebidos: number;
}
export interface ReceptorResponse {
  receptorController: Receptor[];
  message: string;
}