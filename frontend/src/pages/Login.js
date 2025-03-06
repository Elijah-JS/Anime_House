import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/profile"); // ✅ Redirect after fake login
  };

  if (user) {
    navigate("/profile");
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter any email"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter any password"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 px-3 py-1 rounded text-white">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

