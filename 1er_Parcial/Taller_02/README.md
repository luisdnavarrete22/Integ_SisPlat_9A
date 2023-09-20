# Taller No. 1 - Integración de Sistemas y Plataformas
## Integrantes (9no Nivel "A")
- Carreño Reyes Erick Roger
- Macías Chávez Yandy Eliecer
- Navarrete Cevallos Luis David
- Pico Vargas Jordy Gabriel
- Toala Delgado Jesús Smir

# Documentación General

## Instalar dependencias y ejecutar el proyecto:

Instalar dependencias de manera individual en las carpetas de **backend** y **frontend** con:

```bash
npm install
```

# Creación de contenedores en Docker

En las carpetas de **backend** y **frontend** digitar los siguientes comando por consola respectivamente: 

```bash
docker-compose up -d --build backend

docker-compose up -d --build frontend
```

En la carpeta de **frontend** digitar por consola:

```bash
npm run build
```

# Demostración Práctica

A continuación se adjuntan capturas del adapter function creado, además de la ejecución de los contenedores, un ingreso desde el frontend y la visualización del log de registros desde el backend dentro del Docker.

![Adapter function 1](/images/adapter_function01.png)


![Adapter function 2](/images/adapter_function02.png)


![Contenedores](/images/container.png)


![Frontend](/images/frontend_ln.png)