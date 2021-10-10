import Navbar from 'components/Navbar';
import NavbarResponsive from 'components/NavbarResponsive';

const PublicLayout = ({children}) => {
    return (
        <header className="w-full min-h-screen bg-gray-900 font-sans relative overflow-y-scroll">
            <Navbar />
            <NavbarResponsive />
            {children}
        </header>
    )
};
export default PublicLayout;