import { alertPasswordError, alertDatosVacios, alertPasswordLength } from '../components/alert.js';

export const validarFormularios = (registerFormIds) =>{
    const formContainer = document.getElementById(registerFormIds.formContainer);
    const formElement = document.getElementById(registerFormIds.formElement);
    
    const inputs = {
        nombre: document.getElementById(registerFormIds.inputs.nombre),
        correo: document.getElementById(registerFormIds.inputs.correo),
        password: document.getElementById(registerFormIds.inputs.password),
        confirmPassword: document.getElementById(registerFormIds.inputs.confirmPassword)
    };

    if (!inputs.nombre || !inputs.correo || !inputs.password || !inputs.confirmPassword) {
        console.error("No se encontraron los elementos del formulario. Verifica los IDs.");
        return null;
    }

    if(!inputs.nombre.value || !inputs.correo.value || !inputs.password.value || !inputs.confirmPassword.value) {
        alertDatosVacios()
        return null;
    }

    if(inputs.password.value !== inputs.confirmPassword.value) {
        alertPasswordError()
        return null;
    }

    if(inputs.password.value.length < 8){
        alertPasswordLength()
        return null;
    }

    return {
    nombre: inputs.nombre.value,
    correo: inputs.correo.value,
    password: inputs.password.value
}
}

export const validandoListaAdmin = (registerFormElement) =>{
    const inputs ={
        nombre: document.getElementById(registerFormElement.inputs.nombre),
        correo: document.getElementById(registerFormElement.inputs.correo),
        password: document.getElementById(registerFormElement.inputs.password),
        role: document.getElementById(registerFormElement.inputs.role)
    }

    if (!inputs.nombre || !inputs.correo || !inputs.password || !inputs.role ) {
        console.error("No se encontraron los elementos del formulario. Verifica los IDs.");
        return null;
    }

    if(!inputs.nombre.value || !inputs.correo.value || !inputs.password.value) {
        alertDatosVacios()
        return null;
    }

    if(inputs.password.value.length < 8){
        alertPasswordLength()
        return null;
    }

    return {
    nombre: inputs.nombre.value,
    correo: inputs.correo.value,
    password: inputs.password.value
}
}


export const validarLogin = (loginFormIds) => {
    const inputs = {
        correo: document.getElementById(loginFormIds.inputs.correo),
        password: document.getElementById(loginFormIds.inputs.password)
    }

    if (!inputs.correo || !inputs.password) return null

    if (!inputs.correo.value || !inputs.password.value) {
        alertDatosVacios()
        return null
    }

    return {
        correo: inputs.correo.value,
        password: inputs.password.value
    }
}