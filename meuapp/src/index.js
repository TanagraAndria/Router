import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import{ App} from './App';
import { Contato } from './components/Contato/Contato';
import {Produtos} from './components/Produtos/Produtos';
import {Produto} from './components/Produto/Produto';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

ReactDOM.render(
 <BrowserRouter>
 <Header/>
 <Switch>
   <Route path='/' component={App} exact />
   <Route path='/contato' component={Contato} exact />
   <Route path='/produtos' component={Produtos} exact />
   <Route path='/produto/:id' component={Produto} />
   <Route component={() => <div className="error">Page 404</div>} />
 </Switch>
 <Footer/>
 </BrowserRouter>,
  document.getElementById('root')
);


