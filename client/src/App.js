import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Blog from "./components/Blog"
import { UserProvider } from "./context/user"


function App(props) {

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Blog />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;