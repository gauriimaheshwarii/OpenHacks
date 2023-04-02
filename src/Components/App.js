import React from "react";
import Home from "./Home";
import Store from "./Store";
import Api from "./Api";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/api" element={<Api />} />
{/* 
        <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
