import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import{ App} from './App';
import { Contato } from './components/Contato/Contato';
// import {Produtos} from './components/Produtos/Produtos'


ReactDOM.render(
 <BrowserRouter>
 <Switch>
   <Route path='/' component={App} exact />
   <Route path='/contato' component={Contato} exact />
   <Route component={() => <div className="error">Page 404</div>} />
 </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);


