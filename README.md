
# Prueba Técnica Frontend Security & System

Prueba técnica realizada utilizando NextJS 14 y React. 

### Maquetar una página web que incluya:
- Una cabecera con el nombre del usuario y una imagen de perfil.
- Una sección de "Sobre mí" con una breve descripción del usuario.
- Una lista de intereses del usuario.
- Un formulario de contacto con campos para nombre, email y mensaje.


### Requerimientos:
- Utilizar CSS (sin frameworks como Bootstrap) para estilizar la página. 
- Debe ser responsiva y verse bien en dispositivos móviles y de escritorio.
- Crear la estructura del proyecto con Next.js 14.
- Implementar los componentes necesarios para cada sección de la página (por ejemplo, Header, About, Interests, ContactForm).
- Implementar el formulario de contacto con validación básica y mostrar un mensaje de éxito al enviar (no es necesario manejar envíos reales).

#### Requerimientos extras:
- Utilizar CSS Modules para el manejo de estilos.
- Agregar animaciones o transiciones suaves para mejorar la experiencia del usuario.
- Incluir tests básicos con Jest o Testing Library.

## Instalación

Para utilizar el proyecto, puedes clonar este repositorio con el comando

```bash
  git clone https://github.com/Gadd88/prueba_security-system
```

Luego de ello, debes ingresar en la carpeta creada y correr el comando de instalación de dependencias

```bash
  cd prueba_security-system
  npm install
```

Esto instalará lo necesario para ejecutar el proyecto con el siguiente comando. 

```bash
  npm run dev
```

Podrás visualizarlo corriendo en el puerto por defecto http://localhost:3000


## Caracteristica

- Responsivo, vistas mobile, tablet y desktop
- Utiliza CSS Modules para el estilado
- Si bien, no era necesario utilizar el App Router de NextJS, decidí emplearlo para darle un "sentido" a la barra de navegación, en la página principal ya estan cargados todos los componentes creados, pero a través de la navbar, uno puedo ingresar a una ruta especifica donde solo encontrará el componente correspondiente.
- Tests de formulario y perfil
- Utilizada libreria de sonner para notificaciones toast simulando funciones del formulario
- Utilizado react-icons para iconos de redes sociales


## Tests

Para correr los tests preparados puedes utilizar el comando

```bash
  npm run test
```

