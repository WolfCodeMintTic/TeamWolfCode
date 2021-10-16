// import axios from "axios";
// const URL = "http://localhost:5000/productos"
// export const obtenerProducto = async (setData, setEjecutarConsulta) =>{
//     await axios.get(URL).then(resp => {
//         const nuewData = []
//         const dataAxios = resp.data

//         dataAxios.map(item => {
//             nuewData.push(
//                 {
//                     // idProducto: item.idProducto,
//                     producto: item.producto,
//                     descripcion: item.descripcion,
//                     valorUnitario: item.valorUnitario
//                 },
//             )
//         })
//         setData(nuewData)
//     });
// }