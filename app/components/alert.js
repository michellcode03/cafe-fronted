import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm'

export const alertaRegistro = (rol) =>{
Swal.fire({
  title: '¡Registro exitoso!',
  text: 'Tu cuenta ha sido creada correctamente.',
  icon: 'success',
  confirmButtonText: 'Ir a inicio',
  timer: 4000, // opcional: cierra automáticamente
  timerProgressBar: true
}).then(() => {
    if (rol === 'admin') {
        window.location.href = "../../page/admin/dashboar.html"// redirige a la página de administración
    } else {
        window.location.href = "../../page/index.html"; // redirige a la página de inicio de sesión
    }
});
}


export const alertaRegistroAdmin = () =>{
Swal.fire({
  title: '¡Registro exitoso!',
  text: 'Tu cuenta ha sido creada correctamente.',
  icon: 'success',
  confirmButtonText: 'Ir a inicio',
  timer: 4000, // opcional: cierra automáticamente
  timerProgressBar: true
})
}

export const alertaLogin = (rol) =>{
Swal.fire({
  title: '¡Bienvenido!',
  text: 'Has iniciado sesión correctamente.',
  icon: 'success',
  confirmButtonText: 'Continuar',
  timer: 3000,
  timerProgressBar: true
}).then(() => {
    if (rol === 'admin') {
        window.location.href = "../../page/admin/dashboar.html" // redirige a la página de administración
    } else {
        window.location.href = "../../page/index.html" // redirige a la página de inicio de sesión
    }
});
}

export const alertPasswordError = () =>{
 Swal.fire({
  title: '¡Error!',
  text: 'Las contraseñas no coinciden. Por favor verifica.',
  icon: 'error',
  confirmButtonText: 'Aceptar'
});
}

export const alertEmail = ()=>{
Swal.fire({
  title: '¡Error!',
  text: 'Este email ya está registrado. Usa otro email o inicia sesión.',
  icon: 'error',
  confirmButtonText: 'Aceptar'
});
}

export const alertDatosVacios = ()=>{
    Swal.fire({
        title: '¡Error!',
        text: 'Todos los campos son obligatorios. Por favor completa los datos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
}

export const alertPasswordLength = () =>{
    Swal.fire({
        title: '¡Error!',
        text: 'La contraseña debe tener al menos 8 caracteres.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });

}

export const guardarProductos = () =>{
    Swal.fire({
        title: '¡Éxito!',
        text: 'Los productos han sido guardados correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

export const guardarProductosCarrito = () =>{
    Swal.fire({
        title: '¡Éxito!',
        text: 'Los productos han sido guardados al carrito correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}


export const eliminarProductosCarrito = () =>{
    Swal.fire({
        title: '¡Éxito!',
        text: 'Los productos han sido eliminados del carrito correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

export const guardarProductoFavorito = () =>{
    Swal.fire({
        title: '¡Éxito!',
        text: 'Los productos han sido agregados a favoritos correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

export const eliminarProductoFavorito = () =>{
    Swal.fire({
        title: '¡Éxito!',
        text: 'Los productos han sido eliminados de favoritos correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}


export const facturacion = () =>{
    Swal.fire({
        title: 'Compra Exitosa!',
        text: 'La factura se realizo correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}

export const cerrarSesionA = () =>{
    return Swal.fire({
        title: 'Cuenta Cerrada!',
        text: 'La Solicitud se realizo correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}