// stores the logged in users token and determines the log in status

import { createContext, useContext, useState } from "react";

const API = import.meta.env.VITE_API;
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token"));

    const register = async (credentials) => {
        const response = await fetch(API + "users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const result = await response.json();

        if (!response.ok) {
            throw Error(result.message);
        }

        setToken(result.token);
        localStorage.setItem("token", result.token);
        console.log(token);

        return result;
    };
    const login = async (credentials) => {
        const response = await fetch(API + "users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const result = await response.json();

        if (!response.ok) {
            throw Error(result.message);
        }
        setToken(result.token);
        localStorage.setItem("token", result.token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    const value = { token, register, login, logout  };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    }

    export function useAuth() {
        return useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
