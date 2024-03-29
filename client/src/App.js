import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/user";
import CssBaseline from '@mui/material/CssBaseline';
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import AllPostsList from "./components/AllPostsList";
import Post from "./components/Post";
import Home from "./components/Home";
import ResourcesList from "./components/ResourcesList";
import ResourceForm from "./components/ResourceForm";
// import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main:  '#577883', //'#405fc0',
      light: '#cfd9d8',
      black: 'black',
    },
  },
    typography: {
      // fontFamily: 'Noto Sans'
    },
});


function App() {
  return (
    <>
      <UserProvider>
        <CssBaseline />
          <ThemeProvider theme={theme}>
            <Header />
            <Container maxWidth="md">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/post-form" element={<PostForm />} />
                <Route exact path="/posts/:id" element={<Post />} />
                <Route exact path="/posts/:id/edit" element={<PostForm />} />
                <Route exact path="/posts" element={<PostsList />} />
                <Route exact path="/all-posts/:id" element={<Post />} />
                <Route exact path="/all-posts" element={<AllPostsList />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/resources" element={<ResourcesList />} />
                <Route exact path="/resource-form" element={<ResourceForm />} />
              </Routes>
            </Container>
            {/* <Footer /> */}
          </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;