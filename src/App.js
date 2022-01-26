import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Products from './pages/Products/Products';


function App() {
  return (
    <div className="">
      <Router>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/products" element={<Products />}>
      </Route>
      
    </Routes>
  </Router>
    </div>
  );
}

export default App;
