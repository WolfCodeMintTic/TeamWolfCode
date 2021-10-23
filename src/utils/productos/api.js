import axios from "axios";

const baseURL = "https://nameless-eyrie-17054.herokuapp.com"

const executeRequest = async (options, resCallback, errorCallback) => {
    await axios.request(options).then(resCallback).catch(errorCallback);
};

//obtener productos
const getToken = () =>{
    return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
        method: "GET",
        url: `${baseURL}/productos/ `,
        headers: {
            authorization: getToken(),
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);

}

//Crear producto
export const crearProducto = async (data, resCallback, errorCallback) => {
    const options = {
        method : 'POST',
        url: '${baseURL}/productos/',
        headers: { 'content-Type': 'application/json', authorization: getToken()},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const actualizarProducto = async(id, data,resCallback, errorCallback)=> {
    const options ={
        method: 'PATCH',
        url: `${baseURL}/productos/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken()},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const eliminarProducto = async (id, resCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${baseURL}/productos/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
    };
    await executeRequest(options, resCallback, errorCallback);
};
