export default function RazaCard({ raza }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="text-4xl mb-4">🐕</div>

      <h2 className="text-xl font-bold text-orange-600 capitalize mb-2">
        {raza}
      </h2>

      <p className="text-sm text-gray-600">
        Raza obtenida desde la API Dog CEO.
      </p>
    </div>
  );
}