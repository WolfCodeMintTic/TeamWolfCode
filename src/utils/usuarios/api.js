import axios from "axios";

// const baseURL = "http://localhost:5000"
const baseURL = "https://nameless-eyrie-17054.herokuapp.com"

const executeRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
};

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: "GET",
        url: `${baseURL}/usuarios/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const obtenerDatosUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: "GET",
        url: `https://nameless-eyrie-17054.herokuapp.com/usuarios/self/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const actualizarUsuario = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
        data,
    };
    await executeRequest(options, successCallback, errorCallback);
};