import axios from "axios";

const executeRequest = async (options, resCallback, errCallback) => {
    await axios.request(options).then(resCallback).catch(errCallback);
};

//Crear producto
export const crearProducto = async (data, resCallback, errorCallback) => {
    const options = {
        method : 'POST',
        url: 'http://localhost:5000/productos/',
        headers : {'content-Type': 'application/json'},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};

export const actualizarProducto = async(id, data,resCallback, errorCallback)=> {
    const options ={
        method: 'PATCH',
        url: `http://localhost:5000/productos/${id}/`,
        headers : { 'Content-Type': 'application/json'},
        data,
    };
    await executeRequest(options, resCallback, errorCallback);
};
