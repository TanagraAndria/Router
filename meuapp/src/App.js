import React from 'react'
import './App.css';
import { Produtos } from './components/Produtos/Produtos';

export const App = () => {
  return (
    <div className="App">
      <section className={"section"}>
      <Produtos/>
      </section> 
    </div>
  )
}
