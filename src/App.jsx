import { useState } from 'react'
import NavbarH from './components/NavbarH'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ImageUpload from './components/ImageUpload';
import ProductDetails from './components/ProductDetails';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <BrowserRouter>
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
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>

      </BrowserRouter>

    </>

  )
}

export default App
