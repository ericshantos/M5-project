export interface Distribuidor {
  id?: string;
  nome: string;
  contato: string;
  documento: string;
  alimentos: string;
  regiao_atuacao: string;
}
export interface DistribuidorResponse {
  distribuidorController: Distribuidor[];
  message: string;
}