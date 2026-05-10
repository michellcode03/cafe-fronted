import { AgregarAdmin } from "../services/auth.service.js";
import { validandoListaAdmin } from '../utils/validators.js';
import { alertaRegistroAdmin }from '../components/alert.js';
import { guardarUsuarioEnStorage, guardarTokenEnStorage, obtenerTokenDeStorage} from '../utils/storage.js';


const registerFormElement = {
    formContainer: "registerForm",
    formElement: "registerFormElement",
    inputs: {
        nombre: "registerName",
        correo: "registerEmail",
        password: "registerPassword",
        role: "registerRole"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(registerFormElement.formElement);
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const datos = validandoListaAdmin(registerFormElement);
        if(!datos) return;
        const rol = "admin"

        try{
            const token = obtenerTokenDeStorage();
             console.log(datos)
            const response = await AgregarAdmin({ ...datos, role: rol }, token);
            alertaRegistroAdmin();
            guardarUsuarioEnStorage(response.usuario);
            guardarTokenEnStorage(response.token);

        }catch(error){
            console.error('Error en el registro:', error)
        }

    })

})