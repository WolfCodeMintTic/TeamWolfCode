import React from 'react';
import './styles/Styles.css';
import Index from './pages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
