import "../../static/admin.css";

export function AdminView({ estudiantes, cursos }) {
  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <div className="admin-header-icon">🎓</div>
        <h2 className="admin-title">Panel Administracion</h2>
        <span className="admin-badge">Administrador</span>
      </header>

      <div className="admin-content">
        {/* Estudiantes */}
        <div className="admin-section">
          <div className="section-head">
            <div className="section-dot" />
            <h3 className="section-title">Estudiantes</h3>
            <span className="section-count">
              {estudiantes.length} registrados
            </span>
          </div>
          <div className="table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre Completo</th>
                  <th>Carrera</th>
                </tr>
              </thead>
              <tbody>
                {estudiantes.map((e) => (
                  <tr key={e.id}>
                    <td className="td-id">{e.id}</td>
                    <td className="td-name">
                      {e.nombre} {e.apellido}
                    </td>
                    <td>
                      <span className="td-chip">{e.carrera}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cursos */}
        <div className="admin-section">
          <div className="section-head">
            <div className="section-dot" />
            <h3 className="section-title">Cursos</h3>
            <span className="section-count">{cursos.length} activos</span>
          </div>
          <div className="table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre del Curso</th>
                  <th>Cupos Disponibles</th>
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
                  return (
                    <tr key={c.id}>
                      <td className="td-id">{c.codigo}</td>
                      <td className="td-name">{c.nombre}</td>
                      <td>
                        <span className={`cupos-pill ${cuposClass}`}>
                          {disponibles} / {c.limiteCupos}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
