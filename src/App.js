import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Weather from './components/Weather';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
