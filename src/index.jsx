import React from 'react';
import ReactDOM from 'react-dom';
import './Pages/Home/Home.css';
import Home from './Pages/Home/Home';
import Contatos from './Pages/Contatos/Contatos';
import Destino from './Pages/Destino/Destino';
import Promocao from './Pages/Promocao/Promocao';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Contatos" element={<Contatos/>}></Route>
        <Route path="/Destino" element={<Destino/>}></Route>
        <Route path="/Promocao" element={<Promocao/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


