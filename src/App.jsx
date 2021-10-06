import Login from "pages/auth/Login";
import Registro from "pages/auth/Registro";
import Admin from "pages/admin/Index";
import Index from "pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "assets/styles.css";
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Team from 'pages/Team';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={['/admin']}>
            <PrivateLayout>
              <Switch>
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
    </div>
  );
}

export default App;
