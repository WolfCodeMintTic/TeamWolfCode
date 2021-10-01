import Sidebar from 'components/Sidebar';
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <main className="flex "></main>
            {children}
        </div>
    )
}

export default PrivateLayout;
