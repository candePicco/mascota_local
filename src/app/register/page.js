import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🐶</div>
          <h1 className="text-3xl font-black text-gray-900">Crear cuenta</h1>
          <p className="text-gray-500 mt-2">
            Sumate a MascotaLocal para reportar mascotas y guardar favoritos.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="tuemail@gmail.com"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <button
            type="button"
            className="w-full bg-orange-500 text-white py-3 rounded-2xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-100"
          >
            Registrarme
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tenés cuenta?{" "}
          <Link href="/login" className="text-orange-600 font-bold">
            Iniciá sesión
          </Link>
        </p>
      </div>
    </div>
  );
}