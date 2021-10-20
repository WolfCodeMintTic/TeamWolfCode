import React from 'react'
import { Link } from 'react-router-dom'
import wolf from 'media/wolf.png'
import luna from 'media/luna.svg'
import { NavLink } from 'react-router-dom'
import "assets/navbar.css"


const navbar = () => {
    return (
        <nav className="hidden lg:flex">
            <div className="hidden lg:flex navbar items-center justify-between w-5/6 m-auto py-5 px-0">
            <img src={wolf} className="w-12 " />
            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="exact navbar__link no-underline text-white hover:text-blue-400"
                to="/">
                    <i className="fa fa-home cursor-pointer" />HOME
            </NavLink>
            <NavLink
                to="/team"
                activeClassName="navbar__link--active"
                className=" navbar__link no-underline text-white hover:text-blue-400">
                <i className="fas fa-users" />
                TEAM
            </NavLink>
            <Link to="/login">
                <button className="bg-blue-500 p-2 text-white shadow-md hover:bg-indigo-700 rounded-lg">Iniciar sesion</button>
            </Link>
            <img className="w-6 cursor-pointer" title="Cambiar tema" src={luna} alt="icono" />
        </div>
        </nav >
    )
}

export default navbar
