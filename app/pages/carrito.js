import { obtenerUsuarioDeStorage, obtenerTokenDeStorage } from '../utils/storage.js'
import { CarritoAgregar, CarritoMostrando,CarritoEliminar, GuardarOrden } from '../services/auth.service.js'
import { guardarProductosCarrito, eliminarProductosCarrito, facturacion } from '../components/alert.js'

export async function agregarAlCarrito(id_Producto, cantidad) {
    try {
        const token = obtenerTokenDeStorage()
        obtenerUsuarioDeStorage()
        await CarritoAgregar(id_Producto, cantidad, token)
        guardarProductosCarrito()
    } catch (error) {
        throw new Error("Error en agregar Producto al Carrito: " + error.message)
    }
}

function mostrarCarrito(carrito) {
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartImpuesto = document.getElementById('cart-impuesto');
    const cartTotal    = document.getElementById('cart-total');
    const carritos = document.querySelector('.carrito')
    cartItems.innerHTML = '';

    carrito.items.forEach(element => {
        const card = document.createElement('tr');
        card.classList.add('group', 'hover:bg-slate-50/50', 'dark:hover:bg-zinc-800/20', 'transition-colors');
        card.innerHTML = `
            <td class="px-6 py-6">
                <div class="flex items-center gap-4">
                    <div class="h-20 w-20 flex-shrink-0 bg-slate-100 dark:bg-zinc-800 rounded-lg bg-center bg-cover border border-slate-200 dark:border-zinc-700"
                        style="background-image: url('http://localhost:3000${element.imagen}')">
                    </div>
                    <div class="flex flex-col">
                        <span class="text-slate-900 dark:text-white font-bold">${element.nombre}</span>
                        <span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-tight">${element.descripcion ?? ''}</span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-6 hidden md:table-cell text-slate-600 dark:text-slate-400 text-sm font-medium">
                $${element.precio}
            </td>
            <td class="px-6 py-6">
                <div class="flex items-center border border-slate-200 dark:border-zinc-700 rounded-lg w-fit overflow-hidden">
                    <button class="btn-restar px-2 py-1 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500 transition-colors">
                        <span class="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span class="px-3 py-1 text-sm font-bold text-slate-900 dark:text-white border-x border-slate-200 dark:border-zinc-700">
                        ${element.cantidad}
                    </span>
                    <button class="btn-sumar px-2 py-1 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500 transition-colors">
                        <span class="material-symbols-outlined text-sm">add</span>
                    </button>
                </div>
            </td>
            <td class="px-6 py-6 text-right text-slate-900 dark:text-white font-bold">
                $${(element.precio * element.cantidad).toFixed(2)}
            </td>
            <td class="px-6 py-6 text-right">
                <button class="btn-eliminar text-slate-300 hover:text-red-500 dark:text-zinc-600 dark:hover:text-red-400 transition-colors">
                    <span class="material-symbols-outlined">delete</span>
                </button>
                
            </td>
        `;


        const btneliminar = card.querySelector(".btn-eliminar")
        btneliminar.addEventListener('click', () =>{
            const eliminar = element.productoId
            eliminarCarrito(eliminar)
        })


        cartItems.appendChild(card);
    });

        // ← AFUERA del forEach
    cartSubtotal.textContent = `$${carrito.subtotal?.toFixed(2) ?? '0.00'}`;
    cartImpuesto.textContent = `$${carrito.impuesto?.toFixed(2) ?? '0.00'}`;
    cartTotal.textContent    = `$${carrito.total?.toFixed(2)    ?? '0.00'}`;

    carritos.addEventListener('click', () => {
        ordenesUsuarios()
    })
}

const ordenesUsuarios = async() =>{
    try{
        const token = obtenerTokenDeStorage()
        await GuardarOrden(token)
        facturacion()

    }catch(error){
        throw new Error("Error en ordenes de Usuarios: " + error.message)
    }
}

const eliminarCarrito = async(productoId) =>{
    try{
        const token = obtenerTokenDeStorage()
        await CarritoEliminar(productoId, token)
        eliminarProductosCarrito() //mensaje de alerta
        const response = await CarritoMostrando(token)
        mostrarCarrito(response.carrito) // Limpiar el carrito visualmente
    }catch(error){
        throw new Error("Error en eliminar Producto del Carrito: " + error.message)
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    const token = obtenerTokenDeStorage()
    const response = await CarritoMostrando(token)
    mostrarCarrito(response.carrito)
})