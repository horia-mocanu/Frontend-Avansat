import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Home from './Home';
import Login from './Login';
import Players from './Players';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
