import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './styles/main.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import { routes } from "./routes/routes";

function App() {
  return (
      <BrowserRouter>
          <div className="text-gray-600 font-body">
              <NavBar />
              <Switch>
                  <Route exact path={routes.home} render={() => <Redirect to={routes.main} />} />
                  <Route path={routes.main} component={Main}/>
                  <Route path={routes.about} component={About} />
                  <Route path={routes.contact} component={Contact} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
