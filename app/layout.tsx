import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Painel Administrativo</title>
        <meta name="description" content="Sistema de gestão administrativa" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
