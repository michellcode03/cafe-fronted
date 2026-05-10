import { validarProducto } from '../utils/productoValida.js';
import { ProductoCreado, ProductoCreadoFile } from '../services/auth.service.js';
import { guardarProductos } from '../components/alert.js';

import { obtenerUsuarioDeStorage, obtenerTokenDeStorage } from '../utils/storage.js';

const productoFormIds = {
    formProducto: "formProducto",
    inputImagen: "inputImagen",
    inputNombre: "inputNombre",
    inputDescripcion: "inputDescripcion",
    inputPrecio: "inputPrecio",
    selectCategoria: "selectCategoria",
    inputRating: "inputRating",
    inputResenas: "inputResenas",
    selectEstado: "selectEstado"
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(productoFormIds.formProducto)
    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const productos = validarProducto(productoFormIds)
      

        if(!productos) return

        const formData = new FormData()
        const archivo = document.getElementById(productoFormIds.inputImagen).files[0]
        formData.append('imagen', archivo)
        formData.append('nombre', productos.nombre)
        formData.append('descripcion', productos.descripcion)
        formData.append('precio', productos.precio)
        formData.append('categoria', productos.categoria)
        formData.append('rating', productos.rating)
        formData.append('resenas', productos.resenas)
        formData.append('estado', productos.estado)


        try {
            const token = obtenerTokenDeStorage()

            if(!token) return

            const response = await ProductoCreadoFile(formData, token)
            guardarProductos()
            obtenerUsuarioDeStorage()
            
        } catch (error) {
            console.error('Error en el registro de Productos:', error)
        }
    })
})


