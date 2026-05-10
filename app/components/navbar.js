import { obtenerTokenDeStorage } from '../utils/storage.js';

function condicionalNavbar(){
    const perfil = document.getElementById('perfil');
    perfil.addEventListener('click', () => {
        const token = obtenerTokenDeStorage();
        if(token){
            window.location.href = "./usuario/dashboar.html";
        } else {
            window.location.href = "./index.html";
        }
    })

}

condicionalNavbar()
