import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import PublicHome from "./pages/PublicHome";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import InputForm from "./pages/InputForm";
import Recommendation from "./pages/Recommendation.jsx"; 
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={
          token ? <Navigate to="/home" replace /> : <PublicHome />
        }
      />

      {/* Authentication */}
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />

      {/* Protected Layout */}
      <Route element={<Layout />}>

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/intro"
          element={
            <ProtectedRoute>
              <Intro />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inputform"
          element={
            <ProtectedRoute>
              <InputForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendation"
          element={
            <ProtectedRoute>
              <Recommendation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Route>

    </Routes>
  );
}

export default App;