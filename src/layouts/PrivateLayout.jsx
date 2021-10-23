import Sidebar from 'components/Sidebar';
import React, {useEffect, useState} from 'react'
import SideBarResponsive from 'components/SideBarResponsive'
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerDatosUsuarios } from 'utils/usuarios/api';
import { useUser } from 'context/userContext';

const PrivateLayout = ({ children }) => {
    const { isAuthenticated, isLoading, getAccessTokenSilently, logout } = useAuth0();
    const [loadingUserInformation, setLoadingUserInformation] = useState(false);
    const { setUserData } = useUser();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            setLoadingUserInformation(true);
            // pedir token a auth0
            const accessToken = await getAccessTokenSilently({
                audience: 'api-wolfcode-auth',
            });
            // recibir el token de auth0
            localStorage.setItem('token', accessToken);
            //enviarle el token a el backEnd
            await obtenerDatosUsuarios(
                (resp) => {
                    console.log("respuesta", resp);
                    setUserData(resp.data);
                    setLoadingUserInformation(false);
                },
                (error) => {
                    console.log("err", error);
                    logout({ returnTo: window.location.origin })
                    setLoadingUserInformation(false);
                }
            );
        };
        if (isAuthenticated) {
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

    if (isLoading || loadingUserInformation) return <div>Loading ...</div>;
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
