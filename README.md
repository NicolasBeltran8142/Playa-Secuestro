# Sistema de Gestión de Vehículos Incautados

## Descripción

Este proyecto consiste en una aplicación web desarrollada para el sector de la Playa de Secuestro de la Municipalidad de Godoy Cruz, área encargada de la administración y resguardo de vehículos incautados.

Durante el relevamiento de necesidades realizado para este proyecto se identificó que el proceso de carga y administración de la información de los vehículos presentaba oportunidades de mejora en términos de organización, accesibilidad y eficiencia. A partir de este análisis, se diseñó e implementó una solución informática que permite centralizar la información en una base de datos y simplificar las tareas diarias del personal.

La aplicación fue desarrollada siguiendo una arquitectura cliente-servidor, utilizando React para el frontend y Django junto con Django REST Framework para el backend, permitiendo una comunicación mediante una API REST y una gestión más eficiente de los datos.

---

## Objetivo

El objetivo principal del proyecto es optimizar el proceso de registro y administración de los vehículos incautados, proporcionando una herramienta que permita:

* Centralizar toda la información en una base de datos.
* Agilizar la carga y actualización de registros.
* Facilitar la búsqueda y consulta de vehículos.
* Reducir errores asociados al manejo manual de la información.
* Mejorar la organización y el acceso a los datos por parte del personal municipal.

---

## Tecnologías utilizadas

### Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Django
* Django REST Framework
* Python

### Base de datos

* SQLite (desarrollo)

---

## Arquitectura

La solución está compuesta por dos aplicaciones que trabajan de manera conjunta:

* **Frontend:** interfaz desarrollada en React encargada de la interacción con el usuario.
* **Backend:** API desarrollada con Django que implementa la lógica de negocio y el acceso a la base de datos.

Toda la comunicación entre ambos componentes se realiza mediante una API REST, permitiendo una arquitectura desacoplada y escalable.


# Instalación

## Backend

### 1. Crear un entorno virtual

```bash
python -m venv venv
```

### 2. Activar el entorno virtual

**Windows**

```bash
venv\Scripts\activate
```

**Linux / macOS**

```bash
source venv/bin/activate
```

### 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 4. Aplicar migraciones

```bash
python manage.py migrate
```

### 5. Iniciar el servidor

```bash
python manage.py runserver
```

El backend estará disponible en:

```text
http://127.0.0.1:8000/
```

---

## Frontend

### 1. Acceder al directorio del cliente

```bash
cd client
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

El frontend estará disponible normalmente en:

```text
http://localhost:5173/
```

---

## Funcionalidades

* Registro de vehículos incautados.
* Consulta de registros almacenados.
* Edición y actualización de información.
* Eliminación de registros.
* Comunicación mediante API REST entre frontend y backend.
* Almacenamiento centralizado en una base de datos.

---