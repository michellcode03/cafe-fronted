const API_URL = 'https://cafe-backend-fd54.onrender.com'

export const fetchPost = async (ruta, objeto)=>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'POST',
            body: JSON.stringify(objeto),
            headers:{
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        return data;

    }catch(error){
        throw new Error('Error en la solicitud POST: ' + error.message);
    }
}

export const fetchGet = async(ruta, token)=>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data;

    }catch(error){
        throw new Error('Error en la solicitud GET: ' + error.message);
    }
}

export const fetchPostAuth = async(ruta, objeto, token)=>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'POST',
            body: JSON.stringify(objeto),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data;

    }catch(error){
        throw new Error('Error en la solicitud POST: ' + error.message);
    }
}

export const fetchPostAuthDelete = async(ruta, objeto, token)=>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'DELETE',
            body: JSON.stringify(objeto),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data;

    }catch(error){
        throw new Error('Error en la solicitud POST: ' + error.message);
    }
}

export const fetchPostAuthFile = async(ruta, objeto, token) =>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'POST',
            body: objeto,
            headers:{
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data;

    }catch(error){
        throw new Error("Error en la salicitud POST con archivo: " + error.message);
    }
}

export const fetchProductos = async (ruta) =>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data; 

    }catch(error){
        throw new Error("Error en la solicitud Get del Productos: " + error.message)
    }
}

export const fetchPostAuthP = async(ruta, productoId, cantidad, token) =>{
    try{
        const response = await fetch(`${API_URL}/${ruta}`,{
            method: 'POST',
            body: {productoId: productoId, cantidad: cantidad},
            headers:{
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data;

    }catch(error){
        throw new Error("Error en la salicitud POST con archivo: " + error.message);
    }
}