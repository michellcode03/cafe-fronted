import { PerfilUsuario } from "../services/auth.service.js";
import { obtenerTokenDeStorage, obtenerUsuarioDeStorage } from "../utils/storage.js";

function mostrarPerfil(perfil){
    const welcomeMessage = document.getElementById('welcomeMessage');
    const fullName       = document.getElementById('fullName');
    const email          = document.getElementById('email');
    const phone          = document.getElementById('phone');
    const memberSince    = document.getElementById('memberSince');


    fullName.value     = perfil.usuarios.nombre;
    email.value        = perfil.usuarios.correo;
    phone.value        = perfil.usuarios.role ?? '';
    memberSince.value  = new Date(perfil.createdAt).toLocaleDateString();
    welcomeMessage.textContent = `Bienvenido, ${perfil.usuarios.nombre}!`;

}

document.addEventListener('DOMContentLoaded', async () => {
        const token = obtenerTokenDeStorage();
        const usuario = obtenerUsuarioDeStorage();
        const perfil = await PerfilUsuario(token, usuario._id);
        mostrarPerfil(perfil);
});