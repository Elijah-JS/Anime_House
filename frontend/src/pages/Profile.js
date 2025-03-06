import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // ✅ Redirects if not logged in
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Profile Header */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-emerald-400">My Profile</h1>
        <p className="text-gray-300 mt-2">Welcome back, anime lover!</p>
      </div>

      {/* Profile Card */}
      <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100" // Placeholder profile image
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-emerald-400"
          />
          <h2 className="text-2xl font-semibold mt-4">{user.email.split('@')[0]}</h2> {/* Display username */}
          <p className="text-gray-400">{user.email}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-lg font-semibold transition-all w-full"
        >
          Logout
        </button>
      </div>

      {/* User Activity Section */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-emerald-400">📺 Your Anime Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder anime cards */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold">Naruto</h3>
            <p className="text-gray-400">Your Rating: ⭐⭐⭐⭐</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold">Attack on Titan</h3>
            <p className="text-gray-400">Your Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold">Jujutsu Kaisen</h3>
            <p className="text-gray-400">Your Rating: ⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
