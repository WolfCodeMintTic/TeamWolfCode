import axios from "axios";

const executeRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
};

export const actualizarUsuario = async (id, data, resCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json' },
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};