let productoSeleccionado = 456
let descuento = 0.25

let productos = [
     { id: 123, nombre: 'Camisa', imagen: 'imagen/camisa.png', precio: 20.00 },
     { id: 456, nombre: 'Pantalon', imagen: 'imagen/pantalon.png', precio: 23.00 },
     { id: 678, nombre: 'Gorra', imagen: 'imagen/gorra.png', precio: 10.00 },{ id: 908, nombre: 'Bañador', imagen: 'bañador.png', precio: 16.00 },
     { id: 466, nombre: 'Cinturon', imagen: 'imagen/cinturon.png', precio: 12.00 }
]
console.log(productos);

function calcularDescuento(precio, descuento){
 return precio - (precio * descuento);
}

// Encuentra el producto seleccionado
let producto = productos.find(p => p.id === productoSeleccionado);

document.querySelector('body').innerHTML = `
<div>
 <p>El producto seleccionado es <b>${producto.nombre}</b> <img src="${producto.imagen}" alt="${producto.nombre}" width="50"/></p>
 <p>Precio: ${producto.precio} euros, con descuento: <b>${calcularDescuento(producto.precio, descuento).toFixed(2)}</b> euros</p>
</div>
`
