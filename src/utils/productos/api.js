import axios from "axios";

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
        url: "http://localhost:5000/productos/",
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
        url: 'http://localhost:5000/productos/',
        headers: { 'content-Type': 'application/json', authorization: getToken()},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const actualizarProducto = async(id, data,resCallback, errorCallback)=> {
    const options ={
        method: 'PATCH',
        url: `http://localhost:5000/productos/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken()},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};
