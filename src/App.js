import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PropsPage from "./PropsPage";
import TodoList from "./TodoList";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage message="Hello World!" />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
