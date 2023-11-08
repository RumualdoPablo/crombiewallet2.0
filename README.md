# Gestor de Finanzas

El proyecto fue realizado utilizando las siguientes tecnologías:

- **Next.js 13:** Para la construcción del front-end.
- **Tailwind CSS:** Para los estilos y diseño.
- **TypeScript:** Para la lógica de la aplicación.
- **Firebase:** Para la gestión de bases de datos.

## Requerimientos Generales

El proyecto tiene como objetivo principal permitir a los usuarios gestionar sus finanzas personales, cargando en la aplicación el ingreso y egreso de su dinero, con algunas otras funcionalidades más...

### Requerimientos Generales

- La aplicación deberá ser apta para celulares, tablets, notebooks y desktops.
- Deberá incluir un **Readme** con el procedimiento de inicialización del proyecto y las **Historias de Usuario (HU)** junto con los agregados de valor implementados.

## Historias de Usuario

### HU1 - Registro de Usuario

La aplicación deberá tener un formulario de registro de usuario que solicita los siguientes datos:

- Nombre de usuario.
- Email (debe ser un correo válido).
- Contraseña (debe tener al menos 8 caracteres, incluyendo letras, números y al menos un carácter especial).

#### Agregado de valor:

Enviar un email al usuario para confirmar la activación de la cuenta.

### HU2 - Inicio de Sesión

La aplicación deberá tener un formulario de inicio de sesión que solicita los siguientes datos:

- Email.
- Contraseña.

Ambos campos son necesarios para iniciar sesión.

### HU3 - Registrar Movimiento de Dinero

La aplicación cuenta con un formulario para registrar un movimiento de dinero, ya sea de ingreso o egreso. Los detalles del movimiento son:

- Monto (puede tener como máximo dos decimales).
- Título del movimiento.
- Descripción para justificar el movimiento.

### HU4 - Home

En la página principal se le muestra al usuario:

- El balance total de su dinero.
- Su nombre de usuario.
- Un botón para registrar un movimiento.
- Un botón para ocultar el balance.
- Un listado de los últimos movimientos. El listado de movimientos está paginado, ordenado por fecha e indica el monto, el tipo de movimiento y la fecha.

## Agregados de Valor Generales

- Agregar algún gráfico de tortas que indique el tipo de dinero por ubicación o un gráfico que indique el movimiento del dinero en el tiempo.
- Conectar con alguna API que detalle el valor actual del dólar para saber el valor dolarizado.
- Establecer un notificador de gastos que genere una notificación cuando el usuario supera un cierto monto de dinero establecido por el usuario.
- Internacionalización: Se podrá elegir el idioma con un toggle en donde podrás ver la aplicación en español o en inglés.
