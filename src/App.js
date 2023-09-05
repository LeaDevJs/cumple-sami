import './App.css';
import Invitacion from './pages/invitacion';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/invitacion" element={<Invitacion/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
