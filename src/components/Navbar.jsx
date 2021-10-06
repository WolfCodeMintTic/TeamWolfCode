import React from 'react'
import { Link } from 'react-router-dom'
import wolf from 'media/wolf.png'
import luna from 'media/luna.svg'
import { NavLink } from 'react-router-dom'
import "assets/navbar.css"


const navbar = () => {
    return (
        <nav className=" navbar flex  items-center justify-between w-5/6 m-auto py-5 px-0">
            <img src={wolf} className="w-12 " />
            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="exact navbar__link no-underline text-white hover:text-blue-400"
                to="/">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>HOME
                </div>
            </NavLink>
            <NavLink
                to="/team"
                activeClassName="navbar__link--active"
                className=" navbar__link no-underline text-white hover:text-blue-400">
                TEAM
            </NavLink>
            <Link to="/login">
                <button className="bg-blue-500 p-2 text-white shadow-md hover:bg-indigo-700 rounded-lg">Iniciar sesion</button>
            </Link>
            <img className="w-6 cursor-pointer" title="Cambiar tema" src={luna} alt="icono" />
        </nav >
    )
}

export default navbar
