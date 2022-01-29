import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/home" >
      <Home />
      </Route>
      <Route path="/allProducts" >
      <Products />
      </Route>
      <PrivateRoute path="/products/:id" >
      <ProductDetails />
      </PrivateRoute>
      
      <Route path="/login" >
      <Login />
      </Route>
      <Route path="/register" >
      <Register />
      </Route>
      <Route path="/addProduct" >
      <AddProduct />
      </Route>
      <PrivateRoute path="/dashboard" >
      <DashBoard />
      </PrivateRoute>

      <Route path="*" >
      <NotFound />
      </Route>
      
    </Switch>
  </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
