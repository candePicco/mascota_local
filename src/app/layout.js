import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FavoritosProvider } from "@/context/FavoritosContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <FavoritosProvider>
          <Navbar />

          <main className="flex-grow container mx-auto p-6">
            {children}
          </main>

          <Footer />
        </FavoritosProvider>
      </body>
    </html>
  );
}