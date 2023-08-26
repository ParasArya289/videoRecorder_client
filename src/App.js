import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Auth/Login";
import { Recording } from "./Pages/Recording/Recording";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recording/:recordingId"
          element={
            <ProtectedRoute>
              <Recording />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
