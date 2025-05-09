To Do List Fullstack (React + Node.js + MySQL)
Este proyecto es un CRUD completo de tareas, desarrollado como parte de un reto técnico. Incluye frontend en React + Vite, backend con Node.js y Express, y persistencia en MySQL.
---
Tecnologías utilizadas
Frontend
- React (Vite)
- Tailwind CSS
- Axios
Backend
- Node.js
- Express.js
- MySQL
- dotenv
- cors
---
Instalación y ejecución
1. Clonar el repositorio
  git clone https://github.com/FGV26/RetoTecnico.git

2. Configurar la Base de Datos

  CREATE DATABASE nombreData ;
  USE nombreData; 
  CREATE TABLE task (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   INSERT INTO task (title) VALUES ('Tarea 1');

3. Configurar el backend
  cd backend
  npm install
  -----
  Configura tu archivo .env:
  env
  DB_HOST=
  DB_USER=
  DB_PASSWORD=
  DB_NAME=
  DB_PORT=
  
Inicia el servidor:
npm start

4. Configurar el frontend
cd frontend
npm install
npm run dev
