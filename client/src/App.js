import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import AllPostsList from "./components/AllPostsList";
import Post from "./components/Post";
// import AllPost from "./components/AllPost";
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
          <Route exact path="/posts/:id" element={<Post />} />
          <Route exact path="/posts/:id/edit" element={<PostForm />} />
          <Route exact path="/posts" element={<PostsList />} />
          <Route exact path="/all-posts/:id" element={<Post />} />
          <Route exact path="/all-posts" element={<AllPostsList />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;