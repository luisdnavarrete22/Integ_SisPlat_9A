# Taller No. 3 - Integración de Sistemas y Plataformas
## Integrantes (9no Nivel "A")
- Carreño Reyes Erick Roger
- Macías Chávez Yandy Eliecer
- Navarrete Cevallos Luis David
- Pico Vargas Jordy Gabriel
- Toala Delgado Jesús Smir

# Documentación General

## Instalar dependencias y ejecutar el proyecto:

Instalar dependencias de manera individual en las carpetas de **backend** con:

```bash
npm install
```


# Desarrollo de los test
Para realizar los test se utilizo la libreria de **jest** con:

```bash
npm install --save-dev jest
```
En donde realizaron para probar los controladores de **createHab** y **getHab** utilizando
la estructura AAA
## CreateHab
![Test createHab](/Images/imageT1.png)
## GetHab 
![Test getHab](/Images/imageT2.png)

## Prueba de los test
```bash
npm test
```
## Test
![Test](/Images/image0.png)
**nota**: es necesario colocar "test": "jest" dentro de los scripts del package.json


# Creación de los TAG de docker
## Single stage
En las carpetas de **backend** se realiza la configuracion del Dokerfile y se ejecutan los siguientes comandos

 * ingresar a docker hub
    ```bash
    docker login
    ```
* Crear la etiqueta para nuestro repositorio
    ```bash
    docker build -t yandymc/taller_3:single .
    ```
* Publicar el TAG en dockerHub
    ```bash
    docker push yandymc/taller_3:single
    ```

## Multi Stage
* Crear la etiqueta para nuestro repositorio
    ```bash
    docker build -t yandymc/taller_3:single .
    ```
* Publicar el TAG en dockerHub
    ```bash
    docker push yandymc/taller_3:single
    ```

Como resultado tenemos:
![TAG docker](/Images/image1.png)


# Prueba de funcionamiento de las imagenes creadas

![Single Stage](/Images/image2.png)
![Multi Stage](/Images/image2.png)


