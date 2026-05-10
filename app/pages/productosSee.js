import { ProductoMostrando } from '../services/auth.service.js'
import { agregarAlCarrito } from './carrito.js'
import { agregarAlFavorito } from './favorito.js'

function generarEstrellas(rating) {
    const estrellas = Math.round(rating)
    return '⭐'.repeat(estrellas)
}

function mostrarProductos(producto){
    const productosContainer = document.getElementById('productosGrid');
    productosContainer.innerHTML = '';

producto.forEach(producto => {
    const card = document.createElement('article')
    card.classList.add('producto-card')
    card.innerHTML = `
        <div class="producto-imagen">
         <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="producto-info">
            <div class="producto-categoria">${producto.categoria}</div>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <div class="producto-rating">
            ${generarEstrellas(producto.rating)} <span>(${producto.resenas})</span>
        </div>
            <div class="producto-footer">
                <span class="precio-actual">$${producto.precio}</span>
                <button class="btn-agregar">Agregar</button>
                <button class="btn-favorito">Favorito</button>
            </div>
        </div>
    `
    const agregarBtn = card.querySelector('.btn-agregar')
    agregarBtn.addEventListener('click', () =>{
        const id_Producto = producto._id
        const cantidad = 1
        agregarAlCarrito(id_Producto, cantidad)
    })

    const favorito = card.querySelector('.btn-favorito')
    favorito.addEventListener('click', () =>{
        const id_Producto = producto._id
        agregarAlFavorito(id_Producto)
    })

    productosContainer.appendChild(card)
})
}


function buscarProducto(producto) {
    const searchInput = document.getElementById('searchInput')

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase()
        const filteredProductos = producto.filter(producto => 
            producto.nombre.toLowerCase().includes(query)
        )
        mostrarProductos(filteredProductos)
    })
}

function filtrarPorCategoria(producto) {
    const categoriaSelect = document.querySelectorAll('.filtro-btn')

    categoriaSelect.forEach(select => {
        select.addEventListener('click', () => {
            const categoria = select.dataset.categoria
            const filteredProductos = producto.filter(producto => 
                producto.categoria === categoria || categoria === 'todos'
            )
            mostrarProductos(filteredProductos)
        })
})

}

document.addEventListener('DOMContentLoaded', async () => {
    const response = await ProductoMostrando()
    mostrarProductos(response.producto)
    buscarProducto(response.producto)
    filtrarPorCategoria(response.producto)
})


