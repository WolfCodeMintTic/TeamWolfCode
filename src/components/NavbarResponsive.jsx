import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const NavbarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    const { loginWithRedirect } = useAuth0();

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
                    <button
                        onClick={() => loginWithRedirect()}
                        className="bg-blue-500 p-2 text-white shadow-md hover:bg-indigo-700 rounded-lg">Iniciar sesion</button>
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