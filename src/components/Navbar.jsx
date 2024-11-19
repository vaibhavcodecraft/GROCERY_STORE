// src/components/Navbar.js
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { 
    searchTerm, 
    setSearchTerm, 
    cartItemCount,
    user 
  } = useApp();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600 flex items-center">
            <img src="/vite.svg" alt="logo" className="mr-2 rounded" />
            FreshMart
          </Link>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-100 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-green-600">
              Products
            </Link>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-green-600">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link to="/signIn" className="text-gray-600 hover:text-green-600 flex items-center">
              <User className="h-6 w-6" />
              <span className="ml-2">{user ? user.name : 'Sign In'}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}