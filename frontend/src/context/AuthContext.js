import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ Fake login: Accepts any email/password
  const login = async (email, password) => {
    setUser({ email }); // Simulates a logged-in user
  };

  // ✅ Fake register: Works just like login (no real auth required)
  const register = async (email, password) => {
    setUser({ email }); // Simulates account creation
  };

  // ✅ Fake logout: Clears user state
  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
