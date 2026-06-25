import Link from "next/link";

export default function Boton({ href, children, variante = "principal" }) {
  const estilos =
    variante === "principal"
      ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-100"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 rounded-full font-bold transition-all hover:scale-105 ${estilos}`}
    >
      {children}
    </Link>
  );
}