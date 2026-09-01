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

### 1. ¿Qué problema intenta resolver una arquitectura en capas?

Busca organizar mejor el proyecto y separar las responsabilidades. Asi cada parte del sistema se encarga de algo específico y es más fácil mantener, modificar o encontrar errores en el código.

### 2. ¿Qué consecuencias tendría colocar toda la lógica en el Controller?

El Controller terminaría teniendo demasiado código y sería más difícil de entender y mantener. Además, cualquier cambio en la lógica podría afectar directamente la forma en que manejamos las peticiones de http.

### 3. ¿Qué ventaja obtienes al separar la lógica de negocio del acceso a datos?

Que puedes cambiar la forma en que guardas los datos sin tener que modificar toda la lógica de la aplicación. Por ejemplo, puedes cambiar un Repository que usa memoria por uno que use PostgreSQL sin cambiar los Controllers como vimos en la pregunta de ingenieria.

### 4. Si cambiaras PostgreSQL por MongoDB, ¿qué componentes deberían modificarse?

Principalmente el repository, porque es el que se encarga de acceder a los datos. El Controller, las rutas y la lógica del Service deberían mantenerse prácticamente igual.

### 5. ¿Existe una arquitectura "perfecta" para cualquier sistema? ¿Por qué?

No. Cada proyecto tiene diferentes necesidades, tamaños y niveles de complejidad. Una arquitectura que funciona muy bien para un sistema grande puede ser demasiado complicada para un proyecto pequeño.

### 6. ¿En qué momento agregar más capas puede comenzar a generar complejidad innecesaria?

Cuando las capas ya no aportan una responsabilidad realmente diferente y solamente hacen que el código tenga más archivos y pasos para hacer algo sencillo. Hay que buscar un equilibrio entre tener el proyecto organizado y no complicarlo de más.

