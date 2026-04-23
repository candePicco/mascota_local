
export default function AdopcionesLayout({ children }) {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
        <h2 className="text-blue-800 font-bold text-lg">🐾 Sección de Adopciones Responsables</h2>
        <p className="text-blue-600 text-sm">Recordá que adoptar es un compromiso para toda la vida.</p>
      </div>

      <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md">
        {children}
      </section>
    </div>
  );
}