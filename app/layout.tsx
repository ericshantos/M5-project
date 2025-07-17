// app/layout.tsx
import "./globals.css";
import Sidebar from "@/app/components/templates/Sidebar"; // Corrected import path
import Navbar from "@/app/components/templates/Navbar";   // Corrected import path
import { ReactNode } from "react";

export const metadata = {
  title: "Painel Administrativo",
  description: "Sistema de gestão de alimentos e doações",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex">
        <Sidebar />
        <main className="ml-64 w-full">
          <Navbar />
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
