import React from 'react';
import { Button } from './components/ui/button';
import './App.css';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar';
import HeroSection from './pages/student/HeroSection';

function App() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <Login />
    </main>
  );
}

export default App;
