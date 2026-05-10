import { cerrarSesion } from '../utils/storage.js'
import { cerrarSesionA } from '../components/alert.js'


const cerrarApp = async()=>{
    await cerrarSesionA()
    cerrarSesion()
}

const logoutBtn = document.getElementById('logoutBtn')
if(logoutBtn){
logoutBtn.addEventListener('click', async()=>{
    try {
        await cerrarApp()
    } catch (error) {
        console.error('Error al cerrar Sesion:', error)
    }
})
}else{
    console.warn("No existe boton de cerrar sesion")
}