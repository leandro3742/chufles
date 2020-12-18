import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Layout from './layout';
import Home from '../pages/Home';
import Material_Teorico from "../pages/Material_Teorico"; 
import Requisitos from "../pages/Requisitos";
import Examen from "../pages/Examen";
import Pruebas from "../pages/Pruebas";
import Final from "../pages/Final";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Material teorico" component={Material_Teorico} />
            <Route exact path="/Requisitos" component={Requisitos} />
            <Route exact path="/Examen" component={Examen} />
            <Route exact path="/Examenes" component={Pruebas} />
            <Route exact path="/Final" component={Final} />
          </Switch>
        </ Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
