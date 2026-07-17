**Taller - Gestion de Clientes TrendGear**

# Estructura General del Proyecto

La aplicacion permitira administrar la informacion de los clientes de la tienda virtual TrendGear mediante un archivo CSV (Comma-Separated Values). El sistema contara con funciones para visualizar, buscar, agregar y validar registros antes de ser utilizados en un Dashboard o en procesos de analisis.

Adicionalmente, la interfaz incluira un apartado para registrar nuevos clientes, los cuales se agregaran automaticamente al listado manteniendo el formato establecido.

Definicion de los Atributos

El dataset estara compuesto por 11 columnas obligatorias, las cuales representan la informacion principal de cada cliente dentro del sistema.

# Atributo	Descripcion

Customer ID:	Identificador unico de cada cliente.
Name:	Nombre completo del cliente. Los nombres no deben contener tildes para facilitar las busquedas.
Email:	Correo electronico del cliente utilizando dominios de prueba como mailinator.com.
Product Purchased:	Producto tecnologico adquirido por el cliente.
Purchase Date	Fecha: en la que se realizo la compra.
Amount Spent ($):	Valor total pagado en la compra.
Age:	Edad del cliente, utilizada para segmentacion demografica.
City:	Ciudad de residencia del cliente. Las ciudades no deben contener tildes para simplificar los filtros y las busquedas.
Payment Method:	Metodo de pago utilizado durante la compra.
Last Login Date:	Fecha del ultimo acceso del cliente a la plataforma.
Membership Status:	Estado de la membresia o nivel de fidelizacion del cliente.

# Formato del Dataset

Toda la informacion debera almacenarse en un archivo CSV (Comma-Separated Values).

Cada registro seguira una estructura similar a la siguiente:

TG-1001,Laura Gomez,laura.gomez1@mailinator.com,

Una vez definida la estructura del archivo, los registros podran generarse mediante One-Shot Prompting, utilizando alguna de las siguientes alternativas:

# Script en Python

Permite automatizar completamente la creacion del dataset, controlar la cantidad de registros, distribuir los datos de forma equilibrada y generar el archivo CSV de manera local.

# Archivo CSV

Consiste en generar directamente el archivo con todos los registros listos para ser utilizados, agilizando el proceso de carga y pruebas dentro de la aplicacion.

# Validacion del Dataset

Antes de utilizar la informacion, se debe comprobar que todos los datos cumplan con las siguientes condiciones:

- Las edades deben estar entre 13 y 100 años.
- El monto de compra debe ser mayor o igual a 0.
- Todas las fechas deben utilizar el formato YYYY-MM-DD.
- La fecha de compra nunca puede ser posterior a la fecha del ultimo inicio de sesion.
- No deben existir fechas futuras.
- Los metodos de pago deben mantener una nomenclatura uniforme (por ejemplo: Credit Card, Debit Card, PayPal, etc.).
- Cada Customer ID debe ser unico.
- Los correos deben utilizar dominios seguros para pruebas, como mailinator.com.
- Los nombres, ciudades y demas campos de texto no deben contener tildes ni caracteres especiales para facilitar las busquedas.
- Todas las ciudades deben pertenecer al catalogo definido por la aplicacion.
- Funcionalidades de la Aplicacion

# La aplicacion debera incluir las siguientes opciones:

- Cargar el archivo CSV con los clientes.
- Visualizar la informacion en una tabla.
- Buscar clientes por nombre, ciudad, correo o identificador.
- Filtrar informacion por ciudad, metodo de pago o estado de membresia.
- Agregar nuevos clientes mediante un formulario.
- Validar automaticamente la informacion ingresada antes de almacenarla.
- Actualizar la tabla de registros al agregar un nuevo cliente.
- Mantener el formato del archivo CSV para garantizar la compatibilidad con herramientas de analisis y Dashboards.