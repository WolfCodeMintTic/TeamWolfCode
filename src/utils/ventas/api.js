import axios from "axios";

const baseURL = "https://nameless-eyrie-17054.herokuapp.com"


const executeRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
};

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerVentas = async (successCallback, errorCallback) => {
    const options = {
        method: "GET",
        url: `${baseURL}/ventas/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken()},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const crearVenta = async (data, resCallback, errorCallback) => 
{
    const options = {
        method: 'POST',
        url: `${baseURL}/ventas/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken()},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const actualizarVenta = async (id, data, resCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken()},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const eliminarVenta = async (id, resCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${baseURL}/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken()},
    };
    await executeRequest(options, resCallback, errorCallback);
};