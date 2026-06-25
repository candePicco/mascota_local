export default function LoginPage() {
  return (
    <main className="container">
      <h1>Iniciar Sesión</h1>

      <form className="form">
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
          Ingresar
        </button>
      </form>
    </main>
  );
}