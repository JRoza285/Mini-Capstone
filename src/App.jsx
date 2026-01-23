
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import LoginHome from "./Auth/LoginHome.jsx";
import Home from "./Layout/Home.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginhome" element={<LoginHome />} />
      </Route>
    </Routes>
  );
}
