import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from './PrivateComponent';


const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    const { logout} = useAuth0();

    return (
        <div
            className='lg:hidden'
            onClick={() => {
                setMostrarNavegacion(!mostrarNavegacion);
            }}
        >
            <i
                className={`mx-2 fas fa-${mostrarNavegacion ? 'times' : 'bars'
                    } hover:text-blue-400 cursor-pointer`}
            />
            {mostrarNavegacion && (
                <ul className='bg-indigo-700'>
                    <ResponsiveRoute nombre='Perfil' ruta='/admin/' />
                    
                    <PrivateComponent roleList={['Admin', 'Vendedor']}>
                        <ResponsiveRoute nombre='Productos' ruta='/admin/Productos' />
                    </PrivateComponent>

                    <PrivateComponent roleList={['Admin', 'Vendedor']}>
                        <ResponsiveRoute nombre='Ventas' ruta='/admin/ventas' />
                    </PrivateComponent>

                    <PrivateComponent roleList={['Admin']}>
                        <ResponsiveRoute nombre='Usuarios' ruta='/admin/usuarios' />
                    </PrivateComponent>   
                    <Link to='/'>
                        <button
                            onClick={() => logout({ returnTo: window.location.origin })}
                            className=" bg-blue-500 p-2 text-white shadow-md hover:bg-indigo-700 rounded-lg w-full">Cerrar Sesión</button>
                    </Link>
                </ul>
            )}
        </div>
    );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
    return (
        <Link className="no-underline" to={ruta}>
            <li className='text-white border border-gray-300 p-1'>{nombre}</li>
        </Link>
    );
};

export default SidebarResponsive;