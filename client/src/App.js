import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile'
import { render } from "react-dom";
import { useState } from "react";
// import Login from "./pages/Login"


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </BrowserRouter>)
}
export default App;
