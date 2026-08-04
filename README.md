# Sistema de Gestión de Cursos

## Descripción

Aplicación web desarrollada con **React + Vite** que simula el proceso de matrícula de un estudiante en un semestre académico.

Permite:

- Registro y autenticación de usuarios
- Visualización de cursos disponibles
- Selección de cursos con validaciones
- Confirmación de matrícula
- Vista administrativa (profesor)

---

## Tecnologías utilizadas

- React (Hooks)
- Vite
- JavaScript
- CSS modular
- LocalStorage
- pnpm (gestor de paquetes)
- Docker + Docker Compose

---

## Instrucciones de uso

### 1. Clonar el proyecto

```bash
git clone <repo-url>
cd Prueba_React
```

### 2. Instalar pnpm (si no lo tienes)

Este proyecto usa **pnpm** como gestor de paquetes en vez de npm, por mayor seguridad y velocidad de instalación.

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
```

### 3. Ejecutar en modo desarrollo

```bash
pnpm install
pnpm run dev
```

Abrir en navegador:
http://localhost:5173/


### 4. Ejecutar con Docker

Construir y levantar contenedor:

```bash
docker compose up --build
```

Acceder a la aplicación:
http://localhost:3000/

Detener:

```bash
docker compose down
```

> El `Dockerfile` instala pnpm automáticamente dentro del contenedor, no necesitas tenerlo instalado localmente solo para correr Docker.

---

## Tipos de usuario

### Estudiante

- Inicia sesión con su ID y contraseña
- Visualiza cursos disponibles
- Selecciona cursos
- Valida créditos máximos
- Confirma matrícula

### Administrador

- Visualiza:
  - Lista de estudiantes
  - Lista de cursos
- Funciona como panel de control

---

## Estructura del proyecto

src/
├── components/
│ ├── admin/
│ │ └── AdminView.jsx
│ ├── auth/
│ │ ├── Formulario.jsx
│ │ └── Registro.jsx
│ ├── estudiantes/
│ │ ├── Cursos.jsx
│ │ ├── DashboardEstudiante.jsx
│ │ └── Resumen.jsx
│
├── data/
│ ├── cursos.json
│ ├── estudiante.json
│
├── static/
│ ├── admin.css
│ ├── cursos.css
│ ├── eestudiante.css
│ ├── Formulario.css
│ ├── global.css
│ ├── resumen.css
│
├── App.jsx
├── App.css
├── main.jsx

Dockerfile
docker-compose.yml
.dockerignore
pnpm-lock.yaml

---

## Funcionalidades principales

Listado de cursos con:

- Nombre
- Código
- Créditos
- Cupos disponibles

Validaciones:

- No superar créditos permitidos
- No seleccionar cursos sin cupos
- Solo cursos del semestre actual
- Solo estudiantes matriculados pueden inscribirse

Confirmación:

- Resumen de cursos seleccionados
- Guardado en `localStorage`

---

## Decisiones de diseño

### 1. Uso de JSON como base de datos

Se decidió utilizar archivos JSON para simular la persistencia de datos (estudiantes y cursos), permitiendo un desarrollo rápido sin necesidad de backend.

### 2. Manejo de estado con React Hooks

Se utilizó `useState` para gestionar:

- Usuario autenticado
- Cursos disponibles
- Cursos seleccionados

Esto mantiene la aplicación simple y fácil de entender.

### 3. Separación por roles

La aplicación distingue entre:

- Estudiantes
- Administradores

Esto permite simular un sistema más realista y escalable.

### 4. Validaciones en frontend

Todas las reglas de negocio se implementaron en el frontend:

- Límite de créditos
- Disponibilidad de cupos
- Estado de matrícula

Esto facilita pruebas sin backend.

### 5. Uso de LocalStorage

Se utiliza para:

- Guardar la matrícula confirmada
- Simular persistencia entre sesiones

### 6. Gestión de dependencias con pnpm

Se migró de npm a **pnpm** por:

- Instalaciones más rápidas y eficientes en disco (deduplicación de paquetes)
- Bloqueo por defecto de scripts de instalación de dependencias (`preinstall`/`postinstall`), lo que reduce el riesgo de ataques de cadena de suministro
- Lockfile (`pnpm-lock.yaml`) determinista para builds reproducibles

### 7. Dockerización

Se implementó Docker con:

- Build multi-stage (Node + Nginx)
- Instalación de dependencias vía pnpm dentro del contenedor
- Docker Compose

Esto permite:

- Portabilidad
- Despliegue rápido
- Entornos consistentes