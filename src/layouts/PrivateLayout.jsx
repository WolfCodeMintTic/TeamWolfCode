import Sidebar from 'components/Sidebar';
import React from 'react'
import SideBarResponsive from 'components/SideBarResponsive'

const PrivateLayout = ({ children }) => {
    return (
        <div className="flex w-screen h-screen">
            <div className='flex flex-col md:flex-row flex-nowrap h-full w-full'>
                <Sidebar />
                <SideBarResponsive />
                <main className="flex w-full overflow-y-scroll">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout;