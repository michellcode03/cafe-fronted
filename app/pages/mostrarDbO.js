import { MostrarOrdenesAdmin } from '../services/auth.service.js'
import {obtenerTokenDeStorage } from '../utils/storage.js';

function mostrandoOrdenes(orden) {
    const totalUser = document.getElementById('totalUser')
    const totales = document.getElementById('totales')
    const ordenes = document.getElementById('ordenes')

    totalUser.textContent = `${orden.totalUsuarios}`
    totales.textContent = `${orden.totalVentas}`
    ordenes.textContent = `${orden.totalOrdenes}`
}

function filtrarSemanasYanos(orden){
    const filtrar = document.querySelectorAll('.filtro-tiempo')
    const datos = document.getElementById('datos')

    filtrar.forEach(botones =>{
    botones.addEventListener('click', () =>{
        const roles = botones.dataset.categoria
        datos.textContent = `$${orden.totalesSemana}`
        
        if(roles === 'month'){
            datos.textContent = `$${orden.totalesMes}`
        }
    })
})
}


document.addEventListener('DOMContentLoaded', async () => {
    const token = obtenerTokenDeStorage()
    const ordenResponse = await MostrarOrdenesAdmin(token)
    mostrandoOrdenes(ordenResponse)
    const datos = document.getElementById('datos')
    datos.textContent = `$${ordenResponse.totalesSemana}`
    filtrarSemanasYanos(ordenResponse)
})