# Playa-Secuestro

Esta es la guía de inicio rápido para ejecutar el proyecto localmente. El proyecto consta de un backend desarrollado en **Django** y un frontend desarrollado en **React** (con Vite).

---

## ⚙️ Backend (Django)

Sigue estos pasos para levantar la API del backend. Necesitarás tener **Python** instalado en tu sistema.

1. **Abre una terminal** en la carpeta principal del proyecto (donde se encuentra este archivo `README.md`).

2. **Crea un entorno virtual** para aislar las dependencias del proyecto:
   ```bash
   python -m venv venv
   ```
   *(Si usas Mac o Linux y `python` no funciona, intenta usar `python3`)*

3. **Activa el entorno virtual**:
   - En **Windows**:
     ```bash
     venv\Scripts\activate
     ```
   - En **Mac / Linux**:
     ```bash
     source venv/bin/activate
     ```

4. **Instala las dependencias** necesarias (Django, Django REST Framework, CORS headers, etc.):
   ```bash
   pip install -r requirements.txt
   ```

5. **Aplica las migraciones** a la base de datos (para crear las tablas necesarias):
   ```bash
   python manage.py migrate
   ```

6. **Inicia el servidor de desarrollo** de Django:
   ```bash
   python manage.py runserver
   ```
   El backend estará corriendo en `http://127.0.0.1:8000/`.

---

## 🎨 Frontend (React + Vite)

Asegúrate de tener **Node.js** instalado en tu sistema. Luego, sigue estos pasos:

1. **Abre una nueva pestaña en la terminal** (para no cerrar el servidor de Django) y dirígete a la carpeta `client`:
   ```bash
   cd client
   ```

2. **Instala las dependencias** de Node.js necesarias para el proyecto:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo** del frontend:
   ```bash
   npm run dev
   ```

4. **Abre el enlace proporcionado en la consola** en tu navegador. Usualmente será algo como `http://localhost:5173/`. 

¡Listo! Con ambos servidores corriendo, la aplicación debería funcionar correctamente, permitiendo al frontend comunicarse con la API del backend.
