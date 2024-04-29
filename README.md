# PERN Stack

## IMPORTANTE

- Se debe crear en primer lugar un archivo en la raiz de la carpeta con el nombre de .env la cual llevará las variables de entorno para conectar todo. La estructura de este archivo debe ser la siguiente.

>   
    DB_USER = (usuario)
    DB_PASSWORD = (contrasena)
    DB_HOST = postgres
    DB_PORT = 5432
    DB_DATABASE = (nombre de la db)
    DB_PORT_LOCAL = (puerto el cual tendra el contenedor externamente)

    CLIENT_PORT = 3000
    SERVER_PORT = 4000

## Ejecución

- Crear el archivo .env en la raíz de la carpeta.

- Se debe estar ubicado en la raíz de la carpeta, osea ../../pern-stack/

- Ejecutar el siguiente comando para crear los contenedores con el docker-compose:

>
    docker-compose up -d

## Evidencia de ejecucición

- .env de ejemplo

>
    DB_USER = postgres
    DB_PASSWORD = 1234
    DB_HOST = postgres
    DB_PORT = 5432
    DB_DATABASE = tasksdb
    DB_PORT_LOCAL = 5000

    CLIENT_PORT = 3000
    SERVER_PORT = 4000

- Utilizo el DB_PORT_LOCAL = 5000 ya que localmente ya estoy ocupando el puerto 5432, entonces mapeo del puerto 5000 -> 5432.

![Contenedores en docker](/imgs/containers.png)

### Conexión a la base de datos del contenedor usando PgAdmin 4

![Primer paso](/imgs/PgAdmin1.png)

![Segundo paso](/imgs/PgAdmin2.png)

![Tercer paso](/imgs/PgAdmin3.png)

![Cuarto paso](/imgs/PgAdmin4.png)

### Conexión a la base de datos del contenedor usando SQL Shell

![Primer paso](/imgs/SQLShell.png)

## Front-end

![frontend](/imgs/frontend.png)

## Servicio (respuestas del back-end)

- Utilizamos Postman.

![backend](/imgs/Servicio.png)




