import { useState } from "react";
import { Cursos } from "./Cursos";
import { Resumen } from "./Resumen";
import "../../static/eestudiante.css"

export function DashboardEstudiante({ user, cursos, setCursos, onLogout }) {
  const [seleccionados, setSeleccionados] = useState([]);
  const [confirmado, setConfirmado] = useState(false);

  return (

      <div className="dash-wrapper">
        <nav className="dash-nav">
          <span className="dash-logo">📚 MatriculaR</span>
          <div className="dash-user-pill">
            <div className="dash-avatar">
              {user.nombre?.[0]}{user.apellido?.[0]}
            </div>
            <span className="dash-user-name">{user.nombre} {user.apellido}</span>
          </div>
          <button className="dash-logout-btn" onClick={onLogout}>
            <span>⎋</span> Salir
          </button>
        </nav>

        <main className="dash-main">
          {!confirmado ? (
            <>
              <div className="dash-welcome">
                <span className="dash-welcome-icon">👋</span>
                <div className="dash-welcome-text">
                  <h2>Bienvenido, {user.nombre}</h2>
                  <p>Selecciona tus cursos y confirma tu matrícula para este período</p>
                </div>
              </div>

              <div className="dash-step-indicator">
                <div className="step-item active">
                  <div className="step-num">1</div>
                  Seleccionar cursos
                </div>
                <div className="step-divider" />
                <div className="step-item">
                  <div className="step-num">2</div>
                  Revisar resumen
                </div>
                <div className="step-divider" />
                <div className="step-item">
                  <div className="step-num">3</div>
                  Confirmar matrícula
                </div>
              </div>

              <Cursos
                cursos={cursos}
                setCursos={setCursos}
                seleccionados={seleccionados}
                setSeleccionados={setSeleccionados}
                estudiante={user}
              />

              <Resumen
                seleccionados={seleccionados}
                setConfirmado={setConfirmado}
              />
            </>
          ) : (
            <div className="dash-confirmed">
              <div className="confirmed-icon">✅</div>
              <h3 className="confirmed-title">¡Matrícula Confirmada!</h3>
              <p className="confirmed-sub">Tus cursos han sido registrados exitosamente para este período.</p>
            </div>
          )}
        </main>
      </div>

  );
}