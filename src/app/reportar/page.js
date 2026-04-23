export default function Reportar() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Reportar Mascota</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre de la mascota" className="p-2 border rounded" />
        <textarea placeholder="Descripción y zona..." className="p-2 border rounded h-32"></textarea>
        <button className="bg-orange-500 text-white p-3 rounded font-bold">Publicar Alerta</button>
      </form>
    </div>
  );
}