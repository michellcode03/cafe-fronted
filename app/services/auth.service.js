import { fetchPost, fetchPostAuth, fetchPostAuthFile, fetchProductos, fetchGet, fetchPostAuthDelete } from './api.js';

export const registroUsuario = async(usuario)=>{
    try {
        const response = await fetchPost('auth/register', usuario);
        return response;
    } catch (error) {
        throw new Error('Error en el registro: ' + error.message);
    }
}

export const LoginUsuario = async(usuario) =>{
    try{
        const response = await fetchPost('auth/login', usuario);
        return response;
    }catch(error){
        throw new Error('Error en el login: ' + error.message);
    }
}

export const ProductoCreado = async (producto, token) =>{
    try {
        const response = await fetchPostAuth('product/add', producto, token);
        return response; 
    } catch (error) {
        throw new Error('Error al crear el producto: ' + error.message);
    }
}

export const ProductoCreadoFile = async (producto, token) =>{
    try {
        const response = await fetchPostAuthFile('product/add', producto, token);
        return response; 
    } catch (error) {
        throw new Error('Error al crear el producto: ' + error.message);
    }
}

export const ProductoMostrando = async ()=>{
    try {
        const response = await fetchProductos( 'product/see')
        return response;
    } catch (error) {
        throw new Error('Error al mostrar el producto: ' + error.message);
    }
}

export const CarritoAgregar = async (productoId, cantidad, token) => {
    try {
        const response = await fetchPostAuth('shop/add', { productoId, cantidad }, token);
        return response;
    } catch (error) {
        throw new Error('Error al agregar el producto al carrito: ' + error.message);
    }
}

export const CarritoMostrando = async(token) =>{
    try {
        const response = await fetchGet('shop/see', token)
        return response
    } catch (error) {
        throw new Error("Error al mostrar el carrito: " + error.message)
    }
}

export const CarritoEliminar = async (productoId, token) => {
    try {
        const response = await fetchPostAuthDelete('shop/delete', { productoId }, token);
        return response;
    } catch (error) {
        throw new Error('Error al eliminar el producto del carrito: ' + error.message);
    }
}

export const FavoritoAgregar = async (productoId, token) => {
    try {
        const response = await fetchPostAuth('favorito/add', { productoId }, token);
        return response;
    } catch (error) {
        throw new Error('Error al agregar el producto al favorito: ' + error.message);
    }
}

export const FavoritoMostrando = async(token) =>{
    try {
        const response = await fetchGet('favorito/obtain', token)
        return response
    }catch (error) {
        throw new Error("Error al mostrar el favorito: " + error.message)
    }
}

export const FavoritoEliminar = async (productoId, token) => {
    try {
        const response = await fetchPostAuthDelete('favorito/delete', { productoId }, token);
        return response;
    } catch (error) {
        throw new Error('Error al eliminar el producto del favorito: ' + error.message);
    }
}

export const PerfilUsuario = async(token, id) =>{
    try{
        const response = await fetchGet(`auth/perfil/${id}`, token)
        return response;
    }catch(error){
        throw new Error("Error al mostrar el perfil: " + error.message)
    }
}

export const MostrandoUsuarios = async(token) =>{
    try{
        const response = await fetchGet(`auth/lista`, token)
        return response;
    }catch(error){
        throw new Error("Error al mostrar los usuarios: " + error.message)
    }
}

export const GuardarOrden = async(token) =>{
    try {
        const response = await fetchPostAuth('orden/obtain',{} ,token);
        return response;
    } catch (error) {
        throw new Error("Error al guardar orden: " + error.message)
    } 
}

export const MostrandoOrden = async(token) =>{
    try{
        const response = await fetchGet(`orden/user`, token)
        return response;
    }catch(error){
        throw new Error("Error al mostrar los usuarios: " + error.message)
    }
}

export const AgregarAdmin = async (usuario, token) => {
    try{
        const response = await fetchPostAuth('auth/admin', usuario, token);
        return response;
    }catch(error){
        throw new Error("Error al agregar admin: " + error.message)
    }
}

export const MostrarOrdenesAdmin = async(token )=>{
    try{
        const response = await fetchGet('orden/dashboard', token);
        return response;
    }catch(error){
        throw new Error("Error al agregar admin: " + error.message)
    }
} 