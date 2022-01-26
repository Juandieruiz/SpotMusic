# Spotify by Juandieruiz

Como objetivo principal de esta proyecto, la idea es crear un Spotify funcional de manera individual,
en el Readme, agregaremos los pasos seguidos para la perfecta ejecución de la práctica.

1. Empezamos haciendo las Actualizaciones e Instalaciones Necesarias

2. Iniciamos la aplicación, y la levantamos para comprobar que no de fallos

3. Agregamos inicialmente Recursos como: Icons,Fonts, Recursos internos de la aplicacion, Crearemos nuestro Banco de Datos de prueba Inicial(tracker.json)

4. Empezaremos con el design logic que necesitemos:

- Auth : Pagina para Login,Password...(Autentificación)
- Home : Página de Inicio de Sesión Principal, Apta solo para Usuarios Registrados con proteccion de Rutas
- Tracks
- History
- Favorites 

5. Scaffolding en el cual Estructuramos nuestros directorios(carpetas), archivos para facilitar la mantenibilidad y el escalamiento:

- core: Contendra recursos o clases que no se necesiten importar en un modulo(modelos,interfaces,interceptors...)
- modules: Contendrá los modulos usados en Angular
- shared: Contendra todos los recursos que se comparten entre modulos(encabezados,header,footer...)
- data: Contendra la informacion que tendremos como inicio de la aplicación

5. 1. modulos creados en carpeta modules

- Auth
- Home
- Tracks
- History

6. Configuramos los componentes que se compartiran en nuestra aplicacion, para ello creamos un modulo en shared, y una carpeta componentes para integrar los siguientes componentes:

- header-user
- media-player
- side-bar

* Como parte de clean code, modificamos el tsconfig.json y agregamos path, @core, @module, @shared *

7. Creación del SideBar y modificaciones en el mismo componente

8. Creación de componentes en cada page y agregamos un nuevo modulo "favorite" con routing y su page

9. Modificamos nuestra app para que componentes como SideBar y Tracks esten disponibles a la misma vez.

10. en el template inicial, configuramos el css de nuestro track para darle la posición correcta

11. exportaremos modulos en el Shared para poder hacer uso de los componentes Media Player y Header

12. En el Componente MediaPlayer modificaremos el HTML,CSS,TS, Esto para conseguir que el componente quede configurado

13. Crearemos los componentes para las tarjetas de cada cancion, en el primer caso, nosotros le insertaremos los datos de manera manual, para comprobar si llegan los datos a la web

14. Ahora lo que hacemos es inyectar los datos, mediante un Json para al menos poder obtenerlos en Consola, en la cual nos deben aparecer como Array

15. Ahora en vez de llamar a cada track o "paquete de datos(nombre,album...)" lo que haremos será llamar al componente card player, para que sea lo que vean los usuarios.

16. Modificamos el Diseño del Section generic.css, para obtener la base de nuestra web

17. Insertamos html y Css para el diseño del card player, nuestro paso a seguir es el ts para hacerlo funcionar.

18. Agregamos el mode y el track en nuestra vista, para que se vieran los espacios en la vista.

19. Con el diseño del card player terminado podremos obtener los datos obtenidos en la vista.

20. Empezaremos con el modulo favorites para ello, configuramos el routing para poder obtener nuestro mismo sideBar, pero que cambie de componente en la sectionGeneric

21. Creamos dos componentes nuevos playlistbody,playlistheader, estos iran dedicados para el modulo favorites(Canciones que le gusten al usuario)

22. Agregamos HTML y CSS para el playlist header

23. Agregamos HTML,CSS,TS para el playlist body, esto para poder obtener nuestro modulo de favorites terminado

24. Rutas: hemos modificado en sidebar html para que haga un routerlink de nuestros items y agregamos el queryparams para poder obtener los datos de la cancion

25. Pipes: creamos un pipe para ordenar la lista en la carpeta shared el pipe lo que hara sera ordenar la lista en orden ascendete

- Metodo changeSort para cambiar el orden de la lista

26. Directiva: Creamos una directiva para que cuando una imagen no cargue o se rompa, se muestre una imagen por defecto.

27. Formularios Reactivos: 
    -AuthRoutingmodule: 
        -Formulario de Login
        -Formulario de Registro









