import { validarLogin } from '../utils/validators.js';
import { LoginUsuario } from '../services/auth.service.js';
import { guardarUsuarioEnStorage, guardarTokenEnStorage} from '../utils/storage.js';
import { alertaLogin }from '../components/alert.js';


const loginFormIds = {
    formContainer: "loginForm",
    formElement: "loginFormElement",
        inputs: {
        correo: "loginEmail",
        password: "loginPassword"
    }
}

document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById(loginFormIds.formElement)
    form.addEventListener('submit', async (e) =>{
        e.preventDefault()
        
        //les mandamos el formulario para que lo valide y nos regrese los datos
        const datos = validarLogin(loginFormIds)
        if(!datos) return

        try {
            const response = await LoginUsuario({ ...datos})
            const rolUsuarios = response.usuario.role
            alertaLogin(rolUsuarios);
            guardarUsuarioEnStorage(response.usuario)
            guardarTokenEnStorage(response.token)
        } catch (error) {
            console.error('Error en el login:', error)
        }
    })
})