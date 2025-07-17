export interface Doacao {
  id?: string;
  alimento_nome: string;
  quantidade: number;
  doador_nome: string;
  data_doacao: string;
  localizacao: string;
  validado: boolean;
}
export interface DoacaoResponse {
  doacaoController: Doacao[];
  message: string;
}