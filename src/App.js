import React from "react";
import Daftar from './Daftar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Login'
import Home from './Home'


const App = () => {
  return (
    <Router>
    <div>
      <h1></h1>
      <Routes>
        <Route path="/" element={<Navigate to="/daftar" replace />} />
      <Route path="/daftar" element={<Daftar />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>

    </Routes>
    </div>
    </Router>
  );
};

export default App;