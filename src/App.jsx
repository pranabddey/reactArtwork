import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import NavbarH from './components/NavbarH';
import Footer from './components/Footer';
import './App.css';
import HomePage from './components/HomePage';
import ImageUpload from './components/ImageUpload';
import ProductDetails from './components/ProductDetails';
import Contactus from './components/Contactus';

function App() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <header>
          <NavbarH />
        </header>
        <br />
        <br />
        <br />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/imageupload" element={<ImageUpload />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/login" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;