import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Signup from "./components/Signup";
import Login from "./components/Login";
import Blog from "./components/Blog";
import Home from "./components/Home";
import { UserProvider } from "./context/user";


function App(props) {

  return (
    <div className="App">
      <UserProvider>
      <CssBaseline />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/signup" element={<Signup />} /> */}
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;