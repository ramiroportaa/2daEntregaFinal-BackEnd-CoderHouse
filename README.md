# 2da entrega de proyecto final | Curso de Backend | Coderhouse 2022

## Aclaraciones:
1) Para realizar la prueba de funcionalidad se incluyó el frontend en la carpeta "public".

2) Se agrego el campo quantity a los productos del array "productos" del carrito (ya que el desafío no lo pedía y me pareció super necesario).

2) En caso de hacer testing desde POSTMAN: para los métodos POST, PUT y DELETE de la ruta /api/productos, se incorporo un middleware de autorización según el rol del usuario. Por lo que es necesario pasar un header "rol" con value "admin" para que la API responda correctamente y no devuelva un error de autorización.

3) link a deploy en Glitch: https://mire-pale-carbon.glitch.me/

4) Dejo ejemplos de productos para testear.

```json
{
    "nombre": "Remera",
    "descripcion": "La mejor remera del condado",
    "codigo": "xxx001",
    "foto": "https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/T-Shirt-512.png",
    "precio": 4900,
    "stock": 23
}
{
    "nombre": "Pantalón",
    "descripcion": "Un excelente jean",
    "codigo": "xxx002",
    "foto": "https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Jeans-256.png",
    "precio": 7900,
    "stock": 7
}
{
    "nombre": "Chaqueta",
    "descripcion": "Chaqueta pesada para los días muy fríos",
    "codigo": "xxx003",
    "foto": "https://cdn1.iconfinder.com/data/icons/clothes-outfit-line-shop-aholic/512/Jacket-256.png",
    "precio": 8500,
    "stock": 14
}
{
    "nombre": "Zapatillas",
    "descripcion": "Las zapatillas para toda ocasión",
    "codigo": "xxx004",
    "foto": "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-11-256.png",
    "precio": 19750,
    "stock": 9
}
```

### Consigna de la entrega anterior (1ra pre-entrega):
Deberás entregar el estado de avance de tu aplicación eCommerce Backend, que implemente un servidor de aplicación basado en la plataforma Node.js y el módulo express. El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base '/productos' y el otro con '/carrito'. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com

## Aspectos a incluir en el entregable: 
1) El router base '/api/productos' implementará cuatro funcionalidades:
    a. GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
    b. POST: '/' - Para incorporar productos al listado (disponible para administradores)
    c. PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
    d. DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

2) El router base '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:
    a. POST: '/' - Crea un carrito y devuelve su id.
    b. DELETE: '/:id' - Vacía un carrito y lo elimina.
    c. GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
    d. POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
    e. DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

3) Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login. Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada }

5) Un producto dispondrá de los siguientes campos:  id, timestamp, nombre, descripcion, código, foto (url), precio, stock.

6) El carrito de compras tendrá la siguiente estructura: { id, timestamp(carrito), productos: [{ id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }]}

7) El timestamp puede implementarse con Date.now()

8) Realizar la persistencia de productos y del carrito de compras en el filesystem.

### Consigna de la entrega actual (2da pre-entrega):
Basándose en los contenedores ya desarrollados (memoria, archivos) desarrollar dos contenedores más (que cumplan con la misma interfaz) que permitan realizar las operaciones básicas de CRUD en MongoDb (ya sea local o remoto) y en Firebase. Luego, para cada contenedor, crear dos clases derivadas, una para trabajar con Productos, y otra para trabajar con Carritos.

## Aspectos a incluir en el entregable: 
a) A las clases derivadas de los contenedores se las conoce como DAOs (Data Access Objects), y pueden ir todas incluidas en una misma carpeta de ‘daos’.

b) En la carpeta de daos, incluir un archivo que importe todas las clases y exporte una instancia de dao de productos y una de dao de carritos, según corresponda. Esta decisión se tomará en base al valor de una variable de entorno cargada al momento de ejecutar el servidor (opcional: investigar el uso de imports dinámicos).

c) Incluir un archivo de configuración (config) que contenga los datos correspondientes para conectarse a las bases de datos o medio de persistencia que corresponda.