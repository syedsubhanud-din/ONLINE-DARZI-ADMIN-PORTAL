import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import All_darzi from "./pages/all_darzi/all_darzi";
import All_users from "./pages/all_users/all_users";
import User_request from "./pages/user_request/user_request";
import Darzi_request from "./pages/darzi_request/darzi_request";


function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Darzi-Request" element={<Darzi_request />} />
          <Route path="/User-Request" element={<User_request />} />
          <Route path="/All-Darzi" element={<All_darzi />} />
          <Route path="/All-Users" element={<All_users />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;