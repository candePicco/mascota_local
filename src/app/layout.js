import "./globals.css";
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center border-b">
          <Link href="/" className="text-xl font-bold text-orange-600">🐾 MascotaLocal</Link>
          <div className="space-x-4 font-medium text-gray-600">
            <Link href="/" className="hover:text-orange-500">Inicio</Link>
            <Link href="/mascota" className="hover:text-orange-500">Mascotas</Link>
            <Link href="/adopciones" className="hover:text-orange-500">Adopciones</Link>
            <Link href="/reportar" className="hover:text-orange-500">Reportar</Link>
          </div>
        </nav>

        
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        
        <footer className="p-8 bg-gray-800 text-white text-center">
          <p>© 2026 MascotaLocal - TP 1 - Programación 3</p>
        </footer>
      </body>
    </html>
  );
}