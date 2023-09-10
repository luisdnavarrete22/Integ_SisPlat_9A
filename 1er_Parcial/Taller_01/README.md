# Taller No. 1 - Integración de Sistemas y Plataformas
## Integrantes (9no Nivel "A")
- Carreño Reyes Erick Roger
- Macías Chávez Yandy Eliecer
- Navarrete Cevallos Luis David
- Pico Vargas Jordy Gabriel
- Toala Delgado Jesús Smir

# Documentación General

## Instalar dependencias y ejecutar el proyecto:

Instalar dependencias con:

```bash
npm install
```

Situarse en la carpeta de **backend** y **frontend** y ejecutar:

```bash
npm run dev
```

El backend estará corriendo en el puerto **4000** y el frontend por su parte en el puerto **3000**

# Diagrama Entidad Relación del Proyecto

El proyecto trabaja en relación a un Sistema de Reserva Hotelera, las entidades del mismo así como sus relaciones se muestran en la siguiente imagen:

![Diagrama entidad relación](/images/ERD.png)

## Entidades asignadas a cada estudiante:
- **Reseña**: Carreño Reyes Erick Roger
- **Hotel**: Macías Chávez Yandy Eliecer
- **Reserva**: Navarrete Cevallos Luis David
- **Habitación**: Pico Vargas Jordy Gabriel
- **Cliente**: Toala Delgado Jesús Smir

# Dockerización de la Base de Datos, Backend y Frontend

## Pasos iniciales:

Descargar las imágenes oficiales de **Node.js** y **MongoDB** con los siguientes comandos respectivamente:

```bash
docker pull node

docker pull mongo
```

## Base de datos (No relacional - MongoDB)

Ejecutar lo siguiente dentro de una terminal alojada dentro de la carpeta del proyecto:

```bash
docker run -d --name mi-mongodb -p 27017:27017 mongo
```

De esta manera se crea el contenedor de MongoDB en Docker, a su vez también exponemos o llamamos al puerto **27017** donde trabaja.

## Backend (Node.js)

Una vez nos encontramos en la carpeta del backend, en una terminal construimos la imagen del backend con el siguiente comando:

```bash
docker build -t backend-ln .
```

Ejecutamos el contenedor digitando lo siguiente:

```bash
docker run -d --name backend-ln -p 4000:4000 backend-ln
```

## Frontend (React + Next.js)


Ejecutamos la imagen y el contenedor respectivamente con los siguientes comandos:

```bash
1. docker build -t frontend-ln .

2. docker run -d -p 3000:3000 --name frontend-ln frontend-ln
```

# Demostración Práctica

A continuación se adjuntan capturas de las imágenes en Docker creadas, backend, frontend, y la base de datos ejecutándose con normalidad.

![Imágenes en Docer](/images/docker-images.png)


![Backend corriendo](/images/backend.png)


![Frontend corriendo](/images/frontend.png)


![Base de datos corriendo](/images/mongo.png)