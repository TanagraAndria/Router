import React from 'react'
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Produtos } from './components/Produtos/Produtos';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Produtos/>
      <Footer/>
    </div>
  )
}
