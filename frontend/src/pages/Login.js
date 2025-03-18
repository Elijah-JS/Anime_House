import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/profile");
  };

  if (user) {
    navigate("/profile");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0F172A] text-white">
      <h1 className="text-5xl font-extrabold mb-3 text-emerald-400">Login to AnimeHouse</h1>
      <form onSubmit={handleLogin} className="bg-[#1E293B] p-6 rounded-2xl shadow-md w-80">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded mb-2 bg-[#0F172A] text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded mb-4 bg-[#0F172A] text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-500 text-white py-2 rounded-xl transition-all duration-200">
          Login
        </button>
      </form>

      <p className="mt-4 text-gray-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-green-400 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
