export interface Alimento {
  id?: string;
  nome: string;
  descricao: string;
  peso: number;
  validade: string;
  categoria: string;
  estado: string;
  imagem_url: string;
}
export interface AlimentoResponse {
  alimentoController: Alimento[];
  message: string;
}