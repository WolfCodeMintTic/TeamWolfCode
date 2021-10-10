import React from 'react'
import { Link } from 'react-router-dom';
import CarritoLogo from './CarritoLogo';
const Sidebar = () => {
    return (
        <nav className='hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-900 p-4 '>
            <Link className="no-underline" to='/admin'>
                <CarritoLogo />
            </Link>
            <div className='my-4 '>
                <Ruta icono='fas fa-user' ruta='/admin/perfil' nombre='Perfil' />
                <Ruta icono='fas fa-tshirt' ruta='/admin/productos' nombre='Productos' />
                <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas' />
                <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
            </div>
            <Link to='/'>
            <button className=" bg-blue-500 p-2 text-white shadow-md hover:bg-indigo-700 rounded-lg w-full">Cerrar Sesión</button>
            </Link>
        </nav>
    );
};


const Ruta = ({ icono, ruta, nombre }) => {
    return (
        <Link className="no-underline" to={ruta}>
            <button className='p-1 my-2 bg-blue-500 hover:bg-indigo-700 flex w-full items-center text-white rounded-md'>
                <i className={`${icono} w-10`} />
                {nombre}
            </button>
        </Link>
    );
};
export default Sidebar;