import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const { register, user } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and include at least one number.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if terms and conditions are accepted
    if (!acceptedTerms) {
      setError("You must accept the terms and conditions to register.");
      return;
    }

    try {
      await register(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Failed to register. Please try again.");
    }
  };

  if (user) {
    navigate("/profile");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-2xl text-emerald-400 font-bold mb-4 font-color">Register</h1>
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-80">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className="w-full p-2 border rounded mb-4"
        />
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mr-2"
          />
          I accept the terms and conditions to follow the laws of my country.
        </label>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Register
        </button>
      </form>

      {/* Link to Login Page */}
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-green-500 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Register;
