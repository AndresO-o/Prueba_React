import "../../static/Formulario.css";
import { useState } from "react";

export function Formulario({ users, setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = users.find(
      (u) => u.id === id && u.password === password
    );

    if (!usuario) {
      alert("Credenciales incorrectas");
      return;
    }

    setUser(usuario);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-heading">Login</h2>
        <p className="login-sub">Ingresa tus credenciales</p>

        <form onSubmit={handleSubmit}>
          
          <div className="field">
            <label>ID</label>
            <input
              placeholder="Ingrese su ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
}