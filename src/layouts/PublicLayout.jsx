import Navbar from 'components/Navbar';

const PublicLayout = ({children}) => {
    return (
        <header className="w-full min-h-screen bg-gray-900 font-sans relative overflow-y-scroll">
            <Navbar />
            {children}
        </header>
    )
};
export default PublicLayout;