import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/RepositoryDetails';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        {/* Defino o parametro e o "+" para dizer que o que vier depois da barra é o parametro
        Pois se o parametro conter outra / ele pode querer desviar a rota */}
        <Route path="/RepositoryDetails/:repository+" component={Repository} />
    </Switch>
);

export default Routes;
