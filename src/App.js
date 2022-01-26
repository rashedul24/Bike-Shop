import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import DashBoard from './pages/DashBoard/DashBoard';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Firebase/PrivateRoute/PrivateRoute';
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
      <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
      </Route>
      
    </Routes>
  </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
