import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddProduct from './pages/DashBoard/AddProduct/AddProduct';
import DashBoard from './pages/DashBoard/DashBoard';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Firebase/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';


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
      <Route path="/products/:id" element={<ProductDetails />}>
      </Route>
      
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/register" element={<Register />}>
      </Route>
      <Route path="/addProduct" element={<AddProduct />}>
      </Route>
      <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
      </Route>

      <Route path="*" element={<NotFound />}>
      </Route>
      
    </Routes>
  </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
