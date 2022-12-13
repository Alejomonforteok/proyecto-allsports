
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
                Swal.fire(
                    'Elemento agregado al carrito',
                    'success'
                  )
/*                 Toastify({
                    text: 'AGREGASTE AL CARRITO',
                    duration: 1000,
                    newWindow: true,
                    close: true,
                    gravity: 'bottom', // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: 'linear-gradient(to right, #88e375, #88e375)',
                    },
                    onClick: function () { }, // Callback after click
                }).showToast();
 */            }
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
        const {nombre, precio, id } = producto;
        const rw = document.createElement('tr');
        rw.innerHTML = `
    <td>
    ${nombre}
    </td>
    <td>
    ${precio}
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
            mostrarCarritoHTML();
        });

        //Elimina todos los productos del carrito
        const vaciarCarrito = document.querySelector('#vaciarCarrito');
        vaciarCarrito.addEventListener('click', () => {
            carrito = [];
            mostrarCarritoHTML();
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

