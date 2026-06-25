import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center border-b sticky top-0 z-50">
      <Link
        href="/"
        className="text-xl font-black text-orange-600 flex items-center gap-1 transition-transform hover:scale-105"
      >
        🐾 MascotaLocal
      </Link>

      <div className="flex items-center space-x-5 font-bold text-sm text-gray-600">
        <Link href="/" className="hover:text-orange-500 transition-colors">
          Inicio
        </Link>

        <Link href="/mascota" className="hover:text-orange-500 transition-colors">
          Mascotas
        </Link>

        <Link href="/perdidas" className="hover:text-orange-500 transition-colors">
          Perdidas
        </Link>

        <Link href="/encontradas" className="hover:text-orange-500 transition-colors">
          Encontradas
        </Link>

        <Link href="/adopciones" className="hover:text-orange-500 transition-colors">
          Adopciones
        </Link>
        <Link href="/clima" className="hover:text-orange-500 transition-colors">
          Consejos para tu peludito
        </Link>
        <Link href="/favoritos" className="hover:text-orange-500 transition-colors">
          ❤️ Favoritos
        </Link>

        <Link
          href="/reportar"
          className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full hover:bg-orange-500 hover:text-white transition-all"
        >
          + Reportar
        </Link>

        <span className="text-gray-300 font-normal">|</span>

        <Link href="/login" className="hover:text-orange-500 font-bold transition-colors">
          Ingresar
        </Link>

        <Link
          href="/register"
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all shadow-sm"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
}