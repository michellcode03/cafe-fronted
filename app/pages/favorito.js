import { guardarProductoFavorito, eliminarProductoFavorito} from '../components/alert.js'
import {FavoritoAgregar, FavoritoMostrando, FavoritoEliminar} from '../services/auth.service.js'
import { obtenerTokenDeStorage } from '../utils/storage.js'

export const agregarAlFavorito = async(id_Producto) =>{
    try {
        const token = obtenerTokenDeStorage()
        await FavoritoAgregar(id_Producto, token)
        guardarProductoFavorito()
    } catch (error) {
        throw new Error("Error en agregar Producto al Favorito: " + error.message)
    }

}

function generarEstrellas(rating) {
    const estrellas = Math.round(rating)
    return '⭐'.repeat(estrellas)
}


function mostrarFavoritos(favoritos) {
    const favoritos_grid = document.getElementById('favoritesGrid')
    favoritos_grid.innerHTML = ''

    favoritos.items.forEach(element => {
        const card = document.createElement('article')
        card.classList.add('producto-card')
        card.innerHTML = `
            <div class="producto-badge">${element.categoria ?? ''}</div>
            <button class="favorite-btn active">
                <span class="material-symbols-outlined filled-icon" style="color:#ec7f13; font-size:18px">favorite</span>
            </button>
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-overlay">
                    <button class="btn-vista-rapida">Quick View</button>
                </div>
            </div>
            <div class="producto-info">
                <h3 class="producto-nombre">${element.nombre}</h3>
                <p class="producto-descripcion">${element.descripcion ?? ''}</p>
                <div class="producto-rating">${generarEstrellas(element.rating)}</div>
                <div class="producto-footer">
                    <span class="precio-actual">$${element.precio}</span>
                    <button class="btn-agregar">
                        <span class="material-symbols-outlined" style="font-size:18px"></span>
                        remover
                    </button>
                </div>
            </div>
        `
        const quitar = card.querySelector('.btn-agregar')
        quitar.addEventListener('click', async() =>{
            const productoId = element.productoId
            eliminarDeFavorito(productoId)
        })

        favoritos_grid.appendChild(card)
    })
}

export const eliminarDeFavorito = async(productoId) =>{
    try {
        const token = obtenerTokenDeStorage()
        await FavoritoEliminar(productoId, token)
        const favoritos = await FavoritoMostrando(token)
        eliminarProductoFavorito()
        mostrarFavoritos(favoritos.favorito_eliminar)
    } catch (error) {
        throw new Error("Error en eliminar Producto del Favorito: " + error.message)
    }
}


document.addEventListener('DOMContentLoaded', async () =>{
        const token = obtenerTokenDeStorage()
        const favoritos = await FavoritoMostrando(token)
        mostrarFavoritos(favoritos.favorito_eliminar)
})

