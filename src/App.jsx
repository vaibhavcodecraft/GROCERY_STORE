// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import { AppProvider } from './context/AppContext'; // Changed from CartProvider to AppProvider

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='min-h-screen bg-gray-50'>
          <Navbar />
          <main className='container mx-auto px-4 py-8'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;