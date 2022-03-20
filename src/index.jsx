import React from 'react';
import ReactDOM from 'react-dom';
import './Pages/Home/Home.css';
import Home from './Pages/Home/Home';
import Contatos from './Pages/Contatos/Contatos';
import Destino from './Pages/Destino/Destino';
import Promocao from './Pages/Promocao/Promocao';
import Cadastro from './Pages/Cadastro/Cadastro';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import CadastroDestino from './Pages/Cadastro/CadastroDestino/CadastroDestino';
import CadastroPromocao from './Pages/Cadastro/CadastroPromocao/CadastroPromocao';
import CadastroMensagens from './Pages/Cadastro/CadastroMensagens/CadastroMensagens';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Contatos" element={<Contatos/>}></Route>
          <Route path="/Destino" element={<Destino/>}></Route>
          <Route path="/Promocao" element={<Promocao/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}></Route>
          <Route path="/Cadastro/CadastroDestino" element={<CadastroDestino/>}></Route>
          <Route path="/Cadastro/CadastroPromocao" element={<CadastroPromocao/>}></Route>
          <Route path="/Cadastro/CadastroMensagem" element={<CadastroMensagens/>}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


