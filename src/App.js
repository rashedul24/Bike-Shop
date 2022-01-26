import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';


function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/products" element={<Products />}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      
    </Routes>
  </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
