import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Fake login: Accept any email/password
  const login = async (email, password) => {
    setUser({ email }); // ✅ Fakes a logged-in user
  };

  // Fake logout
  const logout = async () => {
    setUser(null); // ✅ Clears the user state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
