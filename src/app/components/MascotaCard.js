import Link from "next/link";

export default function MascotaCard({ nombre, descripcion, icono, href }) {
  return (
    <Link
      href={href}
      className="group p-6 border border-gray-100 bg-gray-50 rounded-2xl text-center transition-all hover:bg-white hover:shadow-md hover:border-orange-200"
    >
      <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">
        {icono}
      </span>

      <h3 className="font-bold text-gray-900 group-hover:text-orange-500">
        {nombre}
      </h3>

      <p className="text-xs text-gray-500 mt-2">
        {descripcion}
      </p>
    </Link>
  );
}
