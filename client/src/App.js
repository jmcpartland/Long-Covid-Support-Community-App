import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import Posts from "./components/Posts";
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
          <Route exact path="/post-form" element={<PostForm />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;