import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍪</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              NoBakeTreats
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/recipes" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Recipes
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Safety
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}