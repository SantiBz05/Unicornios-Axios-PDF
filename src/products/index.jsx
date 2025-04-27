import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsView from './ProductsView';
import ProductsForm from './ProdcutForm';

const ProductsModule = () => {
  return (
    <Router>
      <Routes>
        <Route path="/productos" element={<ProductsView />} />    
        <Route path="/productos/crear" element={<ProductsForm />} />    
      </Routes>
    </Router>
  )
};

export default ProductsModule;