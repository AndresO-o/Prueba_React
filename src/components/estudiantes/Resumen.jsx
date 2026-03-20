import { useState } from "react";
import "../../static/resumen.css";

export function Resumen({ seleccionados, setConfirmado }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  const totalCreditos = seleccionados.reduce((acc, c) => acc + c.creditos, 0);

  const confirmar = () => {
    localStorage.setItem("matricula", JSON.stringify(seleccionados));
    setModalAbierto(false);
    setConfirmado(true);
  };

  return (
    <>
      <div className="resumen-trigger-wrap">
        <button
          className="resumen-trigger-btn"
          onClick={() => setModalAbierto(true)}
          disabled={seleccionados.length === 0}
        >
          📋 Ver resumen
          {seleccionados.length > 0 && (
            <span className="trigger-count">{seleccionados.length}</span>
          )}
        </button>
      </div>

      {modalAbierto && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalAbierto(false);
          }}
        >
          <div className="modal-card">
            <div className="modal-header">
              <h3 className="modal-title">Resumen</h3>
              <button
                className="modal-close-btn"
                onClick={() => setModalAbierto(false)}
              >
                ✕
              </button>
            </div>

            <div>
              {seleccionados.map((c) => (
                <div key={c.id} className="curso-row">
                  <span>{c.nombre}</span>
                  <span>{c.creditos} cr.</span>
                </div>
              ))}
            </div>

            <p>Total: {totalCreditos} créditos</p>

            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => setModalAbierto(false)}
              >
                Volver
              </button>
              <button className="btn-confirm" onClick={confirmar}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
