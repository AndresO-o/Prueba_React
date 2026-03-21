 Sistema de Gestión de Cursos

Descripción

 aplicación web desarrollada con **React + Vite** que simula el proceso de matrícula de un estudiante en un semestre académico.

Permite:

* Registro y autenticación de usuarios
* Visualización de cursos disponibles
* Selección de cursos con validaciones
* Confirmación de matrícula
* Vista administrativa (profesor)

---
Tecnologías utilizadas

* React (Hooks)
* Vite
* JavaScript
* CSS modular
* LocalStorage
* Docker + Docker Compose

---
Instrucciones de uso

1. Clonar el proyecto

```bash
git clone <repo-url>
cd prueba_react
```

---
2. Ejecutar en modo desarrollo

```bash
npm install
npm run dev
```

Abrir en navegador:

```
http://localhost:5173
```

---
3. Ejecutar con Docker 

Construir y levantar contenedor:

```bash
docker compose up --build
```

Acceder a la aplicación:

```
http://localhost:3000
```

Detener:

```bash
docker compose down
```

---

Tipos de usuario

Estudiante

* Inicia sesión con su ID y contraseña
* Visualiza cursos disponibles
* Selecciona cursos
* Valida créditos máximos
* Confirma matrícula

Administrador 

* Visualiza:

* Lista de estudiantes
* Lista de cursos
* Funciona como panel de control

---

Estructura del proyecto

```
src/
 ├── components/
 │    ├── admin/
 │    │    └── AdminView.jsx
 │    ├── auth/
 │    │    ├── Formulario.jsx
 │    │    └── Registro.jsx
 │    ├── estudiantes/
 │    │    ├── Cursos.jsx
 │    │    ├── DashboardEstudiante.jsx
 │    │    └── Resumen.jsx
 │
 ├── data/
 │    ├── cursos.json
 │    ├── estudiante.json
 │
 ├── static/
 │    ├── admin.css
 │    ├── cursos.css
 │    ├── eestudiante.css
 │    ├── Formulario.css
 │    ├── global.css
 │    ├── resumen.css
 │
 ├── App.jsx
 ├── App.css
 ├── main.jsx

Docker/
 ├── Dockerfile
 ├── docker-compose.yml
```

---

Funcionalidades principales

Listado de cursos con:

* Nombre
* Código
* Créditos
* Cupos disponibles

Validaciones:

* No superar créditos permitidos
* No seleccionar cursos sin cupos
* Solo cursos del semestre actual
* Solo estudiantes matriculados pueden inscribirse

Confirmación:

* Resumen de cursos seleccionados
* Guardado en `localStorage`

---

Decisiones de diseño

Uso de JSON como base de datos

Se decidió utilizar archivos JSON para simular la persistencia de datos (estudiantes y cursos), permitiendo un desarrollo rápido sin necesidad de backend.

---

2. Manejo de estado con React Hooks

Se utilizó `useState` para gestionar:

* Usuario autenticado
* Cursos disponibles
* Cursos seleccionados

Esto mantiene la aplicación simple y fácil de entender.

---

3. Separación por roles

La aplicación distingue entre:

* Estudiantes
* Administradores

Esto permite simular un sistema más realista y escalable.

---

4. Validaciones en frontend

Todas las reglas de negocio se implementaron en el frontend:

* Límite de créditos
* Disponibilidad de cupos
* Estado de matrícula

Esto facilita pruebas sin backend.

---

5. Uso de LocalStorage

Se utiliza para:

* Guardar la matrícula confirmada
* Simular persistencia entre sesiones

---

6. Dockerización

Se implementó Docker con:

* Build multi-stage (Node + Nginx)
* Docker Compose

Esto permite:

* Portabilidad
* Despliegue rápido
* Entornos consistentes

---


