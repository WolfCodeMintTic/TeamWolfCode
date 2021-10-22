import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const fetchAuth0Token = async () =>{
      const accessToken = await getAccessTokenSilently({
        audience: 'api-wolfcode-auth',
      });
      localStorage.setItem('token', accessToken)
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <div>Loading ...</div>;

  return isAuthenticated ? (
    <>{children} </>) : (
    <div>
      <div className="text-9x">No estas autorizado para ver este sitio</div>
      <Link to='/'>
        <span className="">
          Home
        </span>
      </Link>
    </div>
  );
};

export default PrivateRoute
