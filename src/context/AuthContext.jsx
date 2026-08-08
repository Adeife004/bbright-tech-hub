/* oxlint-disable only-export-components */
import { createContext, useContext, useState, useCallback } from "react";

export const AuthContext = createContext(null);

function resolveRole(email) {
  const e = email.toLowerCase();
  if (e.includes("staff") || e.includes("admin")) return "staff";
  return "student";
}

function loadUser() {
  try {
    const raw = localStorage.getItem("bbright_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);

  const login = useCallback((email, _password) => {
    const role = resolveRole(email);
    const name = email.split("@")[0].replace(/[._-]/g, " ");
    const initials = name
      .split(" ")
      .map((w) => w[0]?.toUpperCase() ?? "")
      .slice(0, 2)
      .join("");

    const newUser = {
      email,
      role, // 'staff' | 'student'
      name: name.charAt(0).toUpperCase() + name.slice(1),
      initials,
      avatar: null, // swap for a real photo URL
    };

    localStorage.setItem("bbright_user", JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("bbright_user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuth: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Hook — use anywhere inside AuthProvider */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
