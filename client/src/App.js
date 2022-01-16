import Home from './pages/Home';
import Login from './pages/Login';
import React from 'react';
import { render } from "react-dom";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>)
}
export default App;
