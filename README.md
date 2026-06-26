# 🐾 MascotaLocal

## 📌 Descripción del proyecto

MascotaLocal es una aplicación web desarrollada con **Next.js** que busca ayudar a la comunidad a encontrar mascotas perdidas, reportar animales encontrados y promover la adopción responsable.

El proyecto fue desarrollado utilizando el sistema de rutas del App Router de Next.js, componentes reutilizables y Tailwind CSS para el diseño de la interfaz.

En el **Trabajo Práctico N.º 2** la aplicación evolucionó incorporando estado global mediante Context API, persistencia de datos utilizando localStorage y consumo de una API REST externa para brindar consejos útiles según las condiciones climáticas.

---

# ✅ Trabajo Práctico N.º 1

## Requisitos cumplidos

### ✔ Configuración de rutas

Se implementaron las siguientes rutas:

| Ruta           | Descripción          |
| -------------- | -------------------- |
| `/`            | Página principal     |
| `/mascota`     | Listado de mascotas  |
| `/perdidas`    | Mascotas perdidas    |
| `/encontradas` | Mascotas encontradas |
| `/adopciones`  | Mascotas en adopción |
| `/reportar`    | Reportar mascota     |
| `/login`       | Inicio de sesión     |
| `/register`    | Registro             |

### ✔ Ruta anidada

```
/adopciones/urgentes
```

Permite visualizar los casos de adopción urgente utilizando un layout propio.

### ✔ Ruta dinámica

```
/mascota/[id]
```

Muestra el detalle individual de cada mascota utilizando parámetros dinámicos.

### ✔ Navegación

Toda la navegación entre páginas fue implementada utilizando el componente **Link** de Next.js.

### ✔ Layouts

El proyecto cuenta con:

* Navbar
* Footer
* Layout principal
* Layout anidado para la sección de adopciones

---

# ✅ Trabajo Práctico N.º 2

## Arquitectura de Componentes

Se implementaron distintos componentes reutilizables, entre ellos:

* Navbar
* Footer
* MascotaCard
* RazaCard
* Botones reutilizables

Esto permite reutilizar código y mantener una estructura organizada.

---

## Server Component

Se utiliza un **Server Component** para consumir la API externa del clima utilizando `fetch()`.

Ejemplo:

```
/clima
```

---

## Client Component

Se implementan **Client Components** mediante la directiva:

```javascript
"use client";
```

Utilizados principalmente para:

* Favoritos
* Context API
* Local Storage

---

## Estado Global

Se implementó un contexto global llamado:

```
FavoritosContext
```

Permite acceder a la lista de mascotas favoritas desde cualquier parte de la aplicación.

---

## Persistencia

Los favoritos se almacenan utilizando:

```
localStorage
```

De esta manera, la información permanece disponible incluso después de recargar la página.

---

## API REST Externa

Se integró la API pública de **Open-Meteo**.

Información utilizada:

* Temperatura
* Humedad
* Velocidad del viento

Con estos datos la aplicación muestra recomendaciones para el cuidado de las mascotas según las condiciones climáticas.

Ejemplos:

* Mucho calor → evitar paseos largos.
* Hace frío → considerar abrigo para mascotas pequeñas o de pelo corto.
* Mucho viento → extremar cuidados durante los paseos.

---

## Funcionalidades

* Página principal.
* Listado de mascotas.
* Detalle dinámico de mascotas.
* Mascotas perdidas.
* Mascotas encontradas.
* Mascotas en adopción.
* Casos urgentes.
* Reportar mascota.
* Inicio de sesión.
* Registro.
* Favoritos.
* Consejos para mascotas según el clima.

---

## Tecnologías utilizadas

* Next.js
* React
* JavaScript
* Tailwind CSS
* Context API
* localStorage
* Fetch API
* Open-Meteo API

---

## Información del equipo

**Grupo:** Grupo 12

**Equipo:** Red Universitaria Femenina

---

## Integrantes

* Lucila Giordano
* Lucía Agostini
* Candela Picco
* Eliana Tallone
* Abril Galíndez

---

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/candePicco/mascota_local.git
```

### 2. Ingresar al proyecto

```bash
cd mascota_local
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor

```bash
npm run dev
```

### 5. Abrir el navegador

```
http://localhost:3000
```
