# Configuracion multiStage
# Etapa 1: Dependencias de desarrollo
FROM node:18.14.0-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Etapa 2: Construir y ejecutar pruebas
FROM node:18.14.0-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Etapa 3: Dependencias de producción
FROM node:18.14.0-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Etapa 4: Copiar datos de la base de datos (ejemplo para MongoDB)
FROM mongo:latest as mongo-data
COPY ./mongodb-data /docker-entrypoint-initdb.d

# Etapa 5: Copiar archivos específicos
FROM node:18.14.0-alpine3.16 as files
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app .

# Etapa 6: Ejecutar la aplicación
FROM node:18.14.0-alpine3.16 as runner
WORKDIR /app
COPY --from=files /app .
EXPOSE 4000
CMD ["node", "app.js"]





# Configuracion para oneStage
#FROM node:14
# cd app
#WORKDIR  /app
# Dest /app
#COPY package.json ./
# Instalar las dependencias
#RUN npm install
# Dest /app
#COPY . .
#EXPOSE 4000
# Realizar testing
#RUN npm run test
# Eliminar archivos y directorios no necesarios en PROD
#RUN rm -rf tests && rm -rf node_modules
# Unicamente las dependencias de prod
#RUN npm install --prod
# Comando run de la imagen
#CMD [ "node", "app.js" ]

