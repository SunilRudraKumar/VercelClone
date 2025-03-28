import { Routes, Route } from 'react-router-dom';
import Home from './components/main';
import { Landing } from './components/landing';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;