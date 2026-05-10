import { MostrandoOrden } from '../services/auth.service.js'
import { obtenerTokenDeStorage } from '../utils/storage.js'


function mostrarOrdenes(ordenes){
    const numero = document.getElementById('numero')
    let id = 1
    const formateador = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' });
    const tbody = document.querySelector("tbody");
    ordenes.forEach(orden =>{
        const tr = document.createElement('tr');
        tr.classList.add('group', 'hover:bg-coffee-soft/30', 'dark:hover:bg-zinc-800/30', 'transition-colors');
        tr.innerHTML = `
            <td class="px-6 py-5">
                <span class="text-coffee-dark dark:text-white font-mono font-medium">${id++}</span>
            </td>
            <td class="px-6 py-5 text-coffee-accent dark:text-zinc-400 text-sm">
                ${orden.createdAt ? formateador.format(new Date(orden.createdAt)) : 'Fecha no disponible'}
            </td>
            <td class="px-6 py-5">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${orden.estado === 'pagado' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'}">
                    ${orden.estado}
                </span>
            </td>
            <td class="px-6 py-5 text-right text-coffee-dark dark:text-white font-bold">$${orden.total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });
    numero.textContent = `You have ${ordenes.length} total orders since joining`

}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const token = obtenerTokenDeStorage()
        const ordenes = await MostrandoOrden(token)
        console.log(ordenes)
        mostrarOrdenes(ordenes.ordenes)
    } catch (error) {
        console.error('Error al mostrar las órdenes:', error)
    }
})
