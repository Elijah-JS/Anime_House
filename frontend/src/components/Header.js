import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="p-4 bg-gray-900 text-white shadow-lg flex justify-between items-center">
      {/* Logo (Now Links to About Us) */}
      <Link to="/about" className="text-3xl font-extrabold text-emerald-400 tracking-wide">
        AnimeHouse
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <Link to="/" className="hover:text-emerald-400 transition text-lg font-medium">
          Home
        </Link>
        <Link to="/search" className="hover:text-emerald-400 transition text-lg font-medium">
          Search
        </Link>
        {user && (
          <Link to="/favorites" className="hover:text-emerald-400 transition text-lg font-medium">
            ⭐ Favorites
          </Link>
        )}
        {user && (
          <Link to="/profile" className="hover:text-emerald-400 transition text-lg font-medium">
            Profile
          </Link>
        )}
      </nav>

      {/* User Section */}
      <div className="flex items-center space-x-6">
        {user ? (
          <>
            <span className="text-gray-300 text-lg">
              Welcome, <span className="text-emerald-400 font-semibold">{user.email.split('@')[0]}</span>
            </span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-all shadow-md">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-all shadow-md">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

