# Instrucciones

## Crear archivo .env.dev 

En el directorio raíz se debe crear un archivo .env.dev para guardar las variables de entorno de desarrollo

```bash
PORT = 8006
DB = DB
DB_PWD = DB_PASSWORD
```

## Crear carpeta keys

En el directorio raíz se debe crear una carpeta keys y dentro:
- private.pem
- public.pem

Recordar que se debe generar una clave privada y pública de 2048 bits

### En windows se puede usar putty gen
### MacOS o Linux
```bash
# private
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
# public
openssl rsa -pubout -in private.pem -out public.pem
```