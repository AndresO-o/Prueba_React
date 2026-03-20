import { useState } from "react";
import estudiantes from "./data/estudiante.json";
import cursosData from "./data/cursos.json";
import { Formulario } from "./components/auth/Formulario";
import { DashboardEstudiante } from "./components/estudiantes/DashboardEstudiante";
import { AdminView } from "./components/admin/AdminView";

function App() {
  const [user, setUser] = useState(null);
  const [cursos, setCursos] = useState(cursosData);

  const handleLogout = () => setUser(null);

  return (
    <div>
      {!user ? (
        <Formulario users={estudiantes} setUser={setUser} />
      ) : user.rol === "admin" ? (
        <AdminView
          estudiantes={estudiantes}
          cursos={cursos}
          onLogout={handleLogout}
        />
      ) : (
        <DashboardEstudiante
          user={user}
          cursos={cursos}
          setCursos={setCursos}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;