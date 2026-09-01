# Tarea-1-Evoluci-n-de-una-API-Backend
# API Backend de Libros

## Descripción

Este proyecto es una API REST para administrar libros. Fue desarrollada utilizando **Node.js, Express y TypeScript**, aplicando una arquitectura por capas para separar las responsabilidades entre **Routes, Controllers, Services, Repositories y Middleware**.

La API permite consultar, crear, actualizar, eliminar y buscar libros.

## Instalación

Primero, clona el repositorio y entra a la carpeta del proyecto.

Después instala las dependencias con:

```bash
npm install
```

## Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

Para compilar el proyecto:

```bash
npm run build
```

## Endpoints disponibles

| Método | Endpoint                   | Descripción                      |
| ------ | -------------------------- | -------------------------------- |
| GET    | `/api/books`               | Obtener todos los libros         |
| GET    | `/api/books/:id`           | Obtener un libro por ID          |
| GET    | `/api/books?author=Martin` | Buscar libros por autor          |
| POST   | `/api/books`               | Crear un libro                   |
| PATCH  | `/api/books/:id`           | Actualizar parcialmente un libro |
| DELETE | `/api/books/:id`           | Eliminar un libro                |

### Ejemplo de POST

```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "year": 1999
}
```

### Ejemplo de PATCH

```json
{
  "year": 2026
}
```

## Arquitectura

El proyecto está organizado en diferentes capas:

* **Routes:** define las rutas y endpoints de la API.
* **Controllers:** recibe las peticiones y genera las respuestas HTTP.
* **Services:** contiene la lógica de la aplicación.
* **Repository:** se encarga del acceso y manejo de los datos.
* **Middleware:** maneja validaciones, logs y errores.
* **Types:** contiene la definición del modelo `Book`.

Actualmente los libros se almacenan en memoria, pero la arquitectura permite cambiar posteriormente el Repository para utilizar otra tecnología de persistencia como PostgreSQL o MongoDB.
