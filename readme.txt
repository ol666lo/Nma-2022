1)
Como instalar el projecto
    clonar repositorio desde: github  
    ejecutar npm init en la ruta raiz del projecto
    ejecutar en terminal: npm install mssql express morgan corss dotenv ejs axios
                          npm i @babel/core @babel/cli @babel/preset-env @babel/node nodemon -D
                          npm run dev
disclaimer cambiar dirrectorios, rutas y conexion pertinente en desarollo
2)
    Sobre la estructura del projecto:
     Usa una arquitectura api rest con un motor de vistas
integrado (ejs) el cual nos permite escribir sintaxis de javascript mezcladas con html5 y Css para 
generar codigo en una interfaz grafica que se renderiza desde el servidor de node.js . 

    Existen 2 modulos principales dentro de /src index.js y app.js que controlan lo que es en si la 
aplicacion, se almacena toda el resto de la aplicacion en diferentes carpetas de forma de mantener una 
estructura de codigo modular y facil de analizar: /public  almacena los archivos estaticos (css.img.ficheros)
                                                  /Views almacena los archivos de diseño (ejs,html) 
                                                  /routes almacena los archivos de Enrutamiento de las vistas(javascript)
                                                  /database almacena la cadena de conexion a la Base de datos(javascript)
                                                  /controllers almacena los algoritmos de operaciones (javascript)
                                                  /querys almacena sintaxis de SQl  (javascript, SQl)



  


