export const guardarUsuarioEnStorage = (usuario) => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

export const obtenerUsuarioDeStorage = () => {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
}

export const limpiarStorage = () => {
    localStorage.removeItem('usuario');
}

export const guardarTokenEnStorage = (token) => {
    localStorage.setItem('token', token);
}

export const obtenerTokenDeStorage = () => {
    const token = localStorage.getItem('token');
    return token 
}

export const limpiarTokenStorage = () => {
    localStorage.removeItem('token');
}

export const cerrarSesion = ()=>{
    limpiarStorage();
    limpiarTokenStorage();
    window.location.href = "../index.html"; // redirige a la página de inicio de sesión
}