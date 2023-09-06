import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Login from "./Login";



function App() {
  return(   
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NavBar />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="*" element={<p>404 Error! Page Not Found!</p>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App