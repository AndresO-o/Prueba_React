import { useState } from "react";

export function Registro({ users, setUsers, goLogin }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !cedula || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const existe = users.find((u) => u.cedula === cedula);

    if (existe) {
      setError("La cédula ya existe");
      return;
    }

    setUsers([...users, { nombre, apellido, cedula, password }]);
    goLogin();
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2 className="title">Registro</h2>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Nombre</label>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Apellido</label>
            <input value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Cédula</label>
            <input value={cedula} onChange={(e) => setCedula(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn">Registrarse</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="register-link">
          ¿Ya tienes cuenta?
          <a href="#" onClick={goLogin}>Login</a>
        </div>
      </div>
    </div>
  );
}