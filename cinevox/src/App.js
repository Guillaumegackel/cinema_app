import React from 'react';
import{ BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import UserLists from './pages/UserLists';

const App = () => {
  return (
<BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/coup-de-coeur" element={<UserLists />}/>
  </Routes>
</BrowserRouter>
  );
};

export default App;