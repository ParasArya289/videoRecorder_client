import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const loginUser = async (credential) => {
    try {
      const res = await fetch(
        "https://videorecorder-backend-api.onrender.com/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credential),
        }
      );
      const { username, email, id, token } = await res.json();
      setToken(token);
      setUser({ username, email, id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <authContext.Provider value={{ loginUser, token, user, setToken, setUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
