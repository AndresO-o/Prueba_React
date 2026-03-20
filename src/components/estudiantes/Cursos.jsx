import "../../static/cursos.css"
export function Cursos({
  cursos,
  setCursos,
  seleccionados,
  setSeleccionados,
  estudiante,
}) {
  const totalCreditos = seleccionados.reduce((acc, c) => acc + c.creditos, 0);

  const agregarCurso = (curso) => {
    if (!estudiante.matriculado) {
      alert("No estás matriculado");
      return;
    }
    if (curso.semestre !== estudiante.semestre) {
      alert("Solo cursos de tu semestre");
      return;
    }
    if (curso.matriculados >= curso.limiteCupos) {
      alert("Sin cupos disponibles");
      return;
    }
    if (totalCreditos + curso.creditos > estudiante.creditosPermitidos) {
      alert("Excedes el límite de créditos");
      return;
    }
    if (seleccionados.find((c) => c.id === curso.id)) return;

    setSeleccionados([...seleccionados, curso]);
    setCursos(
      cursos.map((c) =>
        c.id === curso.id ? { ...c, matriculados: c.matriculados + 1 } : c,
      ),
    );
  };

  const quitarCurso = (curso) => {
    setSeleccionados(seleccionados.filter((c) => c.id !== curso.id));
    setCursos(
      cursos.map((c) =>
        c.id === curso.id ? { ...c, matriculados: c.matriculados - 1 } : c,
      ),
    );
  };

  return (


      <div className="cursos-section">
        <div className="cursos-section-head">
          <h3 className="cursos-section-title">Cursos disponibles</h3>
          <div className="creditos-badge">
            Créditos seleccionados:{" "}
            <span>
              {totalCreditos} / {estudiante.creditosPermitidos}
            </span>
          </div>
        </div>

        <div className="cursos-card">
          <div className="cursos-table-wrap">
            <table className="cursos-table">
              <thead>
                <tr>
                  <th>Curso</th>
                  <th>Semestre</th>
                  <th>Créditos</th>
                  <th>Cupos</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cursos.map((c) => {
                  const disponibles = c.limiteCupos - c.matriculados;
                  const cuposClass =
                    disponibles === 0
                      ? "cupos-none"
                      : disponibles <= 3
                        ? "cupos-low"
                        : "cupos-ok";
                  const yaSeleccionado = !!seleccionados.find(
                    (s) => s.id === c.id,
                  );
                  const sinCupos = disponibles === 0;

                  return (
                    <tr
                      key={c.id}
                      className={yaSeleccionado ? "seleccionado-row" : ""}
                    >
                      <td>
                        <div className="curso-nombre">{c.nombre}</div>
                        {c.codigo && (
                          <div className="curso-codigo">{c.codigo}</div>
                        )}
                      </td>
                      <td>
                        <span className="semestre-chip">Sem. {c.semestre}</span>
                      </td>
                      <td>
                        <span className="creditos-num">{c.creditos} cr.</span>
                      </td>
                      <td>
                        <span className={`cupos-pill ${cuposClass}`}>
                          {disponibles} / {c.limiteCupos}
                        </span>
                      </td>
                      <td className="action-cell">
                        {yaSeleccionado ? (
                          <button
                            className="btn-quitar"
                            onClick={() => quitarCurso(c)}
                          >
                            ✕ Quitar
                          </button>
                        ) : sinCupos ? (
                          <span className="btn-disabled">Sin cupos</span>
                        ) : (
                          <button
                            className="btn-agregar"
                            onClick={() => agregarCurso(c)}
                          >
                            + Agregar
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer de créditos */}
          <div className="cursos-footer">
            <span className="footer-label">Progreso de créditos</span>
            <div className="credits-bar-wrap">
              <div
                className="credits-bar-fill"
                style={{
                  width: `${Math.min((totalCreditos / estudiante.creditosPermitidos) * 100, 100)}%`,
                }}
              />
            </div>
            <span className="footer-credits">{totalCreditos}</span>
            <span className="footer-max">
              / {estudiante.creditosPermitidos} cr.
            </span>
          </div>
        </div>
      </div>
  
  );
}
