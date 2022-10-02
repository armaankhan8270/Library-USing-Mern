import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import AllBooks from "./components/AllBooks";
import Footer from "./components/Footer";
import SingleBooks from "./components/SingleBooks";
import SearchCar from "./components/SearchCar";
import { StateUserContext } from "./context/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <StateUserContext>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/books/:id" element={<SingleBooks />} />
        <Route path="/search" element={<SearchCar />} />
      </Routes>
      <Footer />
    </StateUserContext>
  </BrowserRouter>
);
