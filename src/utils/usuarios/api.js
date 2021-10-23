import axios from "axios";

const executeRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
};

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: "GET",
        url: "http://localhost:5000/usuarios/",
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const obtenerDatosUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: "GET",
        url: "http://localhost:5000/usuarios/self",
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const actualizarUsuario = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json', authorization: getToken() },
        data,
    };
    await executeRequest(options, successCallback, errorCallback);
};