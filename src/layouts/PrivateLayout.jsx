import Sidebar from 'components/Sidebar';
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <main className="flex w-full bg-gray-200 overflow-y-scroll g-gray-200 items-center justify-cente">
            {children}
            </main>
        </div>
    )
}

export default PrivateLayout;
