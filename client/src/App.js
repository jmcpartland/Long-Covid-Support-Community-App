import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import AllPosts from "./components/AllPosts";
import Post from "./components/Post";
import Home from "./components/Home";
import { UserProvider } from "./context/user";


function App(props) {

  return (
    <div>
      <UserProvider>
      <CssBaseline />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post-form" element={<PostForm />} />
          <Route exact path="/posts" element={<PostsList />} />
          <Route exact path="/posts/:id" element={<Post />} />
          <Route exact path="/all-posts" element={<AllPosts />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;