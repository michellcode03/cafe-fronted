import { MostrandoUsuarios } from '../services/auth.service.js'


function mostrandoUsuarios(usuarios) {
    const tbody = document.querySelector("tbody");
    const totalesAdU = document.getElementById('totalesAdU')
    tbody.innerHTML = '';
    let contador = 1;

    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="size-9 rounded-full bg-cover bg-center border border-[#e7dbcf] dark:border-[#3d2f21]"
                        style="background-image: url('${usuario.foto}');">
                    </div>
                    <span class="text-sm font-bold text-[#1b140d] dark:text-white">${usuario.nombre}</span>
                </div>
            </td>
            <td class="px-6 py-4 text-sm text-[#9a734c] dark:text-[#c4a484]">${usuario.correo}</td>
            <td class="px-6 py-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-tight">
                    ${usuario.role}
                </span>
            </td>
            <td class="px-6 py-4 text-sm text-[#9a734c] dark:text-[#c4a484]">${usuario.fechaRegistro}</td>
        `;
        tbody.appendChild(tr);
    });

    totalesAdU.textContent = `Total Usuarios: ${usuarios.length}`
}

function buscarUsuario(usuarios) {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () =>{
        const query = searchInput.value.toLowerCase()
        const filtrarUsuarios = usuarios.filter(user =>
            user.nombre.toLowerCase().includes(query)
        )
        mostrandoUsuarios(filtrarUsuarios)
    })
}

function filtrarXRole(usuarios){
    const filtrar = document.querySelectorAll('.filtro-btn')

    filtrar.forEach(botones =>{
        botones.addEventListener('click', () =>{
            const roles = botones.dataset.rol
            const filtrarU = usuarios.filter(role =>
                role.role === roles || roles === "todos"
            )

            mostrandoUsuarios(filtrarU)
        })

    })
}


document.addEventListener('DOMContentLoaded', async () => {
    const response = await MostrandoUsuarios()
    mostrandoUsuarios(response.usuarios)
    buscarUsuario(response.usuarios)
    filtrarXRole(response.usuarios)
})