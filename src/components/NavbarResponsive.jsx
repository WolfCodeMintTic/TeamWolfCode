import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavbarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    return (
        <div
            className='lg:hidden'
            onClick={() => {
                setMostrarNavegacion(!mostrarNavegacion);
            }}
        >
            <i
                className={`mx-2 fas fa-${mostrarNavegacion ? 'times' : 'bars'
                    } hover:text-blue-400 cursor-pointer text-blue-500`}
            />
            {mostrarNavegacion && (
                <ul className='bg-indigo-700 '>
                    <ResponsiveRoute nombre='HOME' ruta='/'/>
                    <ResponsiveRoute nombre='Team' ruta='/Team' />
                    <ResponsiveRoute nombre='Iniciar Sesion' ruta='/login' />
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

export default NavbarResponsive;