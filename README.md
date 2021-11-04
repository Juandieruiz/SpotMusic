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
















# Información por defecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
