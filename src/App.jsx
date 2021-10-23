import Login from "pages/auth/Login";
import Registro from "pages/auth/Registro";
import Admin from "pages/admin/Index";
import Index from "pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "assets/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Team from 'pages/Team';
import Productos from "pages/admin/Productos";
import Ventas from "pages/admin/Ventas";
import Usuarios from "pages/admin/Usuarios";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "context/userContext";
import { useState } from "react";
import PrivateRoute from "components/PrivateRoute";
function App() {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
      domain="wolfcode-mintic.us.auth0.com"
      clientId="oKaCtUINrYGi7OtEEcUhX7SwqDvQVBpd"
      redirectUri="https://rocky-temple-35030.herokuapp.com/admin"
      audience='api-wolfcode-auth'
    >
      <div className="App">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/usuarios']}>
                <PrivateLayout>
                  <Switch>
                    <Route path='/admin/usuarios'>
                      <PrivateRoute roleList={['Admin']}>
                        <Usuarios />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin/ventas'>
                      <PrivateRoute roleList={['Admin', 'Vendedor']}>
                        <Ventas />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin/productos'>
                      <PrivateRoute roleList={['Admin', 'Vendedor']}>
                        <Productos />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin'>
                      <Admin />
                    </Route>
                  </Switch>
                </PrivateLayout>
              </Route>
              <Route path={['/login', '/registro']}>
                <AuthLayout>
                  <Switch>
                    <Route path='/login'>
                      <Login />
                    </Route>
                    <Route path='/registro'>
                      <Registro />
                    </Route>
                  </Switch>
                </AuthLayout>
              </Route>
              <Route path={['/', '/team']}>
                <PublicLayout>
                  <Switch>
                    <Route path='/team'>
                      <Team />
                    </Route>
                    <Route path='/'>
                      <Index />
                    </Route>
                  </Switch>
                </PublicLayout>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;