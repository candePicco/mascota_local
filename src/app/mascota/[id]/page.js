
export default async function DetalleMascota({ params }) {
  
  const { id } = await params;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 border rounded-3xl shadow-xl bg-white">
      <h1 className="text-3xl font-bold text-orange-600 mb-4 italic">Ficha de Mascota</h1>
      <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <p className="text-xl text-gray-700">
          Viendo los detalles de la mascota con código: 
          <span className="font-mono font-black ml-2 text-orange-700 bg-orange-200 px-3 py-1 rounded-lg">
            #{id}
          </span>
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
          Contactar rescatista
        </button>
      </div>
    </div>
  );
}