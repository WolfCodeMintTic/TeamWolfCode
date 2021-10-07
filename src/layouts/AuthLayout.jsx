import CarritoLogo from 'components/CarritoLogo';
import React from 'react'
import { Link } from 'react-router-dom';

const authLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex items-start'>
                <Link className="no-underline hover:text-blue-400" to='/' >
                        <i className="fa fa-home cursor-pointer" />
                        HOME
                </Link>
            </div>
            <div>
                <CarritoLogo />
                {children}
            </div>
        </div>
    );
}
export default authLayout;