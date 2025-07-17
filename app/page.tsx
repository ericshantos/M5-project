import Navbar from '@components/templates/Navbar';
import Sidebar from '@components/templates/Sidebar';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Navbar />
        <main className="flex-1 p-4 sm:p-6 bg-white">
          <h1 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-2">📊</span> Painel Administrativo
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <span className="text-xl mr-3">📦</span>
                <h3 className="font-semibold">Produtos</h3>
              </div>
              <p className="text-gray-600">Total: 125 itens</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <span className="text-xl mr-3">👥</span>
                <h3 className="font-semibold">Clientes</h3>
              </div>
              <p className="text-gray-600">Total: 42 cadastrados</p>
            </div>
            
            {/* Adicione mais cards conforme necessário */}
          </div>
        </main>
      </div>
    </div>
  );
}
