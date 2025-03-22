import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { MockAnimeProvider } from "./context/MockAnimeContext";
import { AnimeProvider } from "./context/AnimeContext"; // ✅ Real API provider
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import SearchResults from "./pages/SearchResults";
import AnimeDetails from "./pages/AnimeDetails";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// 🔹 Protected Route wrapper
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <AnimeProvider> {/*  Wrap the real provider around everything */}
        <MockAnimeProvider> {/*  Temporary wrapper for mock data */}
          <Router>
            <Header />
            <div className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/anime/:id" element={<AnimeDetails />} />
                <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </MockAnimeProvider>
      </AnimeProvider>
    </AuthProvider>
  );
}

export default App;