
///////////*TODO SPORTS TIENDA*/////////

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const productoManchesterCityHomekit = new Producto(1, "Camiseta Manchester City Homekit", 14899, "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/manchester-city-2022-23-puma-home-kit-8_3f4c4192-9c06-4739-9d29-58454f092844_grande.jpg?v=1655129844");
const productoBarcelonaHomekit = new Producto(2, "Camiseta Barcelona Homekit", 17499, "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/V/CV7891-428_0_1.jpg");
const productoBotinesMercurialKM = new Producto(3, "Botines Nike Mercurial KM", 29999, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5279fa7a/products/NI_DB2857-506/NI_DB2857-506-1.JPG");
const productoParisSaintGermain3rdkit = new Producto(4, "Camiseta Paris Saint Germain 3RD kit", 17399, "https://tiendagolperu.com/wp-content/uploads/2021/10/psg-2021-22-nike-third-kit-3.jpg");
const productoGuantesReusch = new Producto(5, "Guantes de Arquero Reusch", 5499, "https://www.guantesdearquero.com/wp-content/uploads/2022/01/guantes-reusch-attrakt-2022-2-1-819x1024.png");
const productoBotinesPredator = new Producto(6, "Botines  Adidas Predator", 23999, "https://static.privatesportshop.com/img/p/3834936-11539283.jpg");
const productoGuantesNike = new Producto(7, "Guantes Nike Mercurial", 3999, "https://www.gransport.es/9966-large_default/guantes-portero-nike-mercurial-touch-victory-future-lab.jpg");
const productoBayernHomekit = new Producto(8, "Camiseta Bayern Homekit", 15999, "https://todosobrecamisetas.com/wp-content/uploads/bayern-munich-2022-23-adidas-home-kit-9.jpg");
const productoManchesterUnitedHomekit = new Producto(9, "Camiseta Manchester United Homekit", 15999, "https://mezzalacamisetas.com.ar/wp-content/uploads/2022/07/man.jpg");
const productoRealMadrid2ndKit = new Producto(10, "Camiseta Real Madrid 2ND kit", 15799, "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/segunda-equipacion-adidas-real-madrid-2022-23-9_grande.jpg?v=1656692319");
const productoInterDeMilanoHomekit = new Producto(11, "Camiseta Inter De Milano Homekit", 17499, "https://pontelacamiseta.pe/wp-content/uploads/2022/02/Inter-Milan-Local-Aficionado.jpg");
const productoRealMadridHomekit = new Producto(12, "Camiseta Real Madrid Homekit", 15799, "https://newsport.vteximg.com.br/arquivos/ids/13311002-1000-1000/GR3994-A.jpg?v=637856264483630000");
const productoACMilanHomekit = new Producto(13, "Camiseta AC Milan Homekit", 14899, "https://http2.mlstatic.com/D_NQ_NP_992911-MLA51821874346_102022-W.jpg");
const productoInterDeMilano2ndkit = new Producto(14, "Camiseta Inter de Milano 2ND kit", 17499, "https://assets-es.imgfoot.com/media/cache/800x800/inter-milan-away-2021-2022.jpg");
const productoGuantesAdidas = new Producto(15, "Guantes Adidas Predator", 15299, "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/F/H/FH7288_imagen-de-los-Guantes-de-portero-futbol-adidas-predator-gl-pro-2020-negro-rojo_1_pie-derecho.jpg");
const productoParisSaintGermainHomekit = new Producto(16, "Camiseta Paris Saint Germain Homekit", 17399, "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-vapor-match-shirt-2022-23-with-rsanches-18-printing_ss4_p-13359518+pv-1+u-1afabma5052mcje6rvkh+v-927a86a69ee343e18da331999e91997d.png?_hv=2&w=900");
const productoBarcelona2ndkit = new Producto(17, "Camiseta Barcelona 2ND kit", 17499, "https://static.nike.com/a/images/t_default/cc0aa973-6074-4bf2-9ed2-637640a23160/jersey-de-f%C3%BAtbol-dri-fit-adv-del-fc-barcelona-visitante-2021-2022-match-LRQg9V.png");
const productoManchesterCity2ndkit = new Producto(18, "Camiseta Manchester City 2ND kit", 14899, "https://newsport.vteximg.com.br/arquivos/ids/10552724-1000-1000/75921903-A.jpg?v=637698166883200000");
const productoManchesterUnited2ndkit = new Producto(19, "Camiseta Manchester United 2ND kit", 15999, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/gshdjf1-d34683c764e261b44916305922891379-1024-1024.png");
const productoBotinesMercurialSuperfly = new Producto(20, "Botines Mercurial Superfly 8 PRO FG", 31299, "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9cea19e1/products/NI_CV0961-600/NI_CV0961-600-1.JPG");


const productos = [productoManchesterCityHomekit, productoBarcelonaHomekit, productoBotinesMercurialKM, productoParisSaintGermain3rdkit,
    productoGuantesReusch, productoBotinesPredator, productoGuantesNike, productoBayernHomekit, productoManchesterUnitedHomekit, productoRealMadrid2ndKit,
    productoInterDeMilanoHomekit, productoRealMadridHomekit, productoACMilanHomekit, productoInterDeMilano2ndkit, productoGuantesAdidas, productoParisSaintGermainHomekit,
    productoBarcelona2ndkit, productoManchesterCity2ndkit, productoManchesterUnited2ndkit, productoBotinesMercurialSuperfly
];

//Array Carrito

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");

//Función para mostrar los productos: 

const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        contenedorProductos.appendChild(card);


//Agregar productos al carrito con Sweet Alert: 

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: 'success',
                title: 'Elemento agregado al carrito!',
                showConfirmButton: false,
                timer: 1500
            });
            agregarAlCarrito(producto.id)
        })
    })
}

//Función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

//MOSTRAR EL CARRITO DE COMPRAS: 

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});


//Función para mostrar el carrito:

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <p class="card-text"> ${producto.cantidad} </p>
                <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
                </div>
            </div>
        `
        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito con Sweet Alert:

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            Swal.fire({
                title: 'Eliminar producto?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0320fc',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Su elemento ha sido eliminado del carrito.',
                        confirmButtonColor: '#0320fc',
                    }
                    )
                    eliminarDelCarrito(producto.id);
                }
            })
        })
    })
    calcularTotal();
}

//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciar el carrito de compras con Sweet Alert: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Vaciar carrito?',
        text: "Deberá seleccionar todo nuevamente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0320fc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar carrito!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Carrito vacio',
            )
            eliminarTodoElCarrito();
        }
      })
})

//Función para eliminar todo el carrito: 

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}

//Mensaje con el total de la compra 

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = ` Total: $${totalCompra}`;
}

/***********API***********/
/* var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "2edf2289b2180a4a51868658c35df58c");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

///////Status////

fetch(" https://v3.football.api-sports.io/status", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//////Timezone////

fetch("https://v3.football.api-sports.io/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "2edf2289b2180a4a51868658c35df58c"
	},
    "response" : [],

})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});


///////Competition////

    fetch("https://v3.football.api-sports.io/leagues?id=1&season=2022", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



//Prueba

 */

