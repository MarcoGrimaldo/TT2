
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Monitor from './Monitor';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}>
          
        </Route>
        <Route path="/monitoreo" element={<Monitor />}>
          
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
