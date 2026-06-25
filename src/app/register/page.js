export default function RegisterPage() {
  return (
    <main className="container">
      <h1>Crear Cuenta</h1>

      <form className="form">
        <input
          type="text"
          placeholder="Nombre completo"
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          required
        />

        <button type="submit">
          Registrarme
        </button>
      </form>
    </main>
  );
}