

///////////*TODO SPORTS TIENDA*/////////


//Variables
const URL_JSON = 'data.json';
const listaProductos = document.querySelector('#tarjetas-grid');

//Carrito
let carrito = [];

//MOSTRAR EL ARRAY DE PRODUCTOS EN EL async await

async function mostrarHtml() {
  const response = await fetch(URL_JSON);
  const product = await response.json();

  cardHtml(product);
}
mostrarHtml();
function cardHtml(product) {
  product.forEach((producto) => {
    const div = document.createElement('div');
    div.classList = "card", "col-xl-3", "col-md-6", "col-xs-12";
    div.innerHTML =
      `
            <div>
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> $ ${producto.precio} </p>
                <button href="#" class="tarjeta__boton btn colorBoton" id="boton${producto.id}" >Agregar al Carrito</button>
                </div>
            </div>
        `

    listaProductos.appendChild(div);

    //Agrega al carrito
    const botonAgregarProducto = document.querySelector(`#boton${producto.id}`);

    botonAgregarProducto.addEventListener('click', (e) => {
      e.preventDefault();
      agregarAlCarrito(producto.id);

      if (botonAgregarProducto) {
        Swal.fire({
          icon: 'success',
          title: 'Elemento agregado al carrito!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  });
}

//Agrega Al carrito
async function agregarAlCarrito(id) {
  const response = await fetch(URL_JSON);
  const productos = await response.json();

  const producto = productos.find((producto) => producto.id === id);
  const productoCarrito = carrito.find((producto) => producto.id === id);
  if (productoCarrito) {
    productoCarrito.cantidad++;
  } else {
    carrito.push(producto);
  }

  //Muestra el carrito
  mostrarCarritoHTML();
}

const carritoHTML = document.querySelector('#lista-carrito tbody');

//Armado de carrito HTML
function mostrarCarritoHTML() {
  //Limpia HTML
  limpiarHTML();
  //Muestra el carrito en HTML
  carrito.forEach((producto) => {
    const { nombre, precio,cantidad, id } = producto;
    const rw = document.createElement('tr');
    rw.innerHTML = `
    <td>
    ${nombre}
    </td>
    <td>
    ${precio}
    </td>
    <td>
    ${cantidad}
    </td>
    <td>
    <a href="#" class="borrar-producto" id="borrar${id}"> x </a>
    </td>
    
    `;

    carritoHTML.appendChild(rw);

    //Elimina un producto Individual del carrito
    const borrarProduDelCarrito = document.querySelector(`#borrar${id}`);
    borrarProduDelCarrito.addEventListener('click', () => {
      const producto = carrito.find((producto) => producto.id === id);
      const index = carrito.indexOf(producto);
      carrito.splice(index, 1);
      
       Swal.fire({
        title: '¿Eliminar producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0320fc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar porducto'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Porducto eliminado',
            )
          mostrarCarritoHTML();
        }
      })
    });


    //Elimina todos los productos del carrito
    const vaciarCarrito = document.querySelector('#vaciarCarrito');
    vaciarCarrito.addEventListener('click', () => {
      Swal.fire({
        title: '¿Vaciar carrito?',
        text: "¡Deberá seleccionar todo nuevamente!",
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
          mostrarCarritoHTML();
        }
      })
      carrito = [];
        });
  });
}

//Limpia el HTML
function limpiarHTML() {
  carritoHTML.innerHTML = '';
}

const botonPagar = document.querySelector('#botonPagar');
botonPagar.addEventListener('click', () => {
  Swal.fire('Gracias por tu compra!');
  carrito = [];
  mostrarCarritoHTML();
});



/***********API***********/
var myHeaders = new Headers();
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
    "response":[57],
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
    
