import axios from "axios";

const executeRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
};


export const crearVenta = async (data, resCallback, errorCallback) => 
{
    const options = {
        method: 'POST',
        url: "http://localhost:5000/ventas/",
        headers: {'Content-Type': 'application/json'},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const actualizarVenta = async (id, data, resCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json' },
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};