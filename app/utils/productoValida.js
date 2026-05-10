import { alertDatosVacios } from '../components/alert.js';

export const validarProducto = (productoFormIds) => {
    const inputs = {
        imagen: document.getElementById(productoFormIds.inputImagen),
        nombre: document.getElementById(productoFormIds.inputNombre),
        descripcion: document.getElementById(productoFormIds.inputDescripcion),
        precio: document.getElementById(productoFormIds.inputPrecio),
        categoria: document.getElementById(productoFormIds.selectCategoria),
        rating: document.getElementById(productoFormIds.inputRating),
        resenas: document.getElementById(productoFormIds.inputResenas),
        estado: document.getElementById(productoFormIds.selectEstado)
    }

    if(!inputs.imagen.files[0] || !inputs.nombre.value || !inputs.descripcion.value || !inputs.precio.value || !inputs.categoria.value || !inputs.rating.value || !inputs.resenas.value || !inputs.estado.value) {
        alertDatosVacios()
        return null;
    }

    return{
        nombre: inputs.nombre.value,
        descripcion: inputs.descripcion.value,
        precio: parseFloat(inputs.precio.value),
        categoria: inputs.categoria.value,
        rating: parseFloat(inputs.rating.value),
        resenas: parseInt(inputs.resenas.value),
        estado: inputs.estado.value
    }
}