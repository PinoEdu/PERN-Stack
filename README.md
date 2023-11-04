# PERN Stack

## IMPORTANTE

- Se debe crear en primer lugar un archivo en la raiz de la carpeta con el nombre de .env la cual llevará las variables de entorno para conectar todo. La estructura de este archivo debe ser la siguiente.

>   
    DB_USER = (usuario)
    DB_PASSWORD = (contrasena)
    DB_HOST = postgres
    DB_PORT = 5432
    DB_DATABASE = (nombre de la db)
    DB_PORT_LOCAL = (puerto coon el que se conecta a la base de datos del contenedor)

    SERVER_PORT = 4000
    CLIENT_PORT = 3000
