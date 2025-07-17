export interface Notificacao {
  id?: string;
  mensagem: string;
  data: string;
  tipo: string;
}
export interface NotificacaoResponse {
  notificacaoController: Notificacao[];
  message: string;
}