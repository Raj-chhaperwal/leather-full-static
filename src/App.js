import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import UserPage from "./Views/UserPage";
import ContactPage from "./Views/ContactPage";
import PhotoPage from "./Views/PhotoPage";


const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />}></Route>
        <Route path="/contactpage" element={<ContactPage />}></Route>
        <Route path="/photopage" element={<PhotoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  
);

export default App;
