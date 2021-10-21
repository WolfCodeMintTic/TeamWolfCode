import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({children}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <div>Loading ...</div>;
    
  return isAuthenticated ? (
  <>{children} </> ): (
      <div>
  <div className="text-9x">No estas autorizado para ver este sitio</div>
  <Link to ='/'>
  <span className="">
  Home
  </span>
  </Link>
  </div>
  );
};

export default PrivateRoute
