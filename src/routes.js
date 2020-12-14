import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function Routes() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/blog" component={Blog} />
          <Route path="/contato" component={Contact} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default Routes();
