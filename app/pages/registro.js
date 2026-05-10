import { validarFormularios } from '../utils/validators.js';
import { registroUsuario } from '../services/auth.service.js';
import { alertaRegistro }from '../components/alert.js';
import { guardarUsuarioEnStorage, guardarTokenEnStorage} from '../utils/storage.js';

const registerFormIds = {
  formContainer: "registerForm",
  formElement: "registerFormElement",
  inputs: {
    nombre: "registerName",
    correo: "registerEmail",
    password: "registerPassword",
    confirmPassword: "registerConfirmPassword"
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(registerFormIds.formElement)
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        
        const datos = validarFormularios(registerFormIds)
        
        if(!datos) return
       // const rol = document.querySelector('input[name="registerRole"]:checked').value
        
        try {
        const response = await registroUsuario({ ...datos, role: "user" })
        const rolUsuarios = response.usuario.role
          alertaRegistro(rolUsuarios)
          guardarUsuarioEnStorage(response.usuario)
          guardarTokenEnStorage(response.token)
        } catch(error) {
            // alerta de error aquí
          console.error('Error en el registro:', error)
        }
    })
})