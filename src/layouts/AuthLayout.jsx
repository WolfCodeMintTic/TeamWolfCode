import CarritoLogo from 'components/CarritoLogo';
import React from 'react'
import { Link } from 'react-router-dom';

const authLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex items-start'>
                <Link to='/'>
                    <a className="active flex  no-underline hover:text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>HOME</a>
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