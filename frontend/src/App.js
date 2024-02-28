import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UnprotectedRoute from "./components/auth/UnprotectedRoute";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = false;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:chat-id"
          element={
            <ProtectedRoute user={user}>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:group-id"
          element={
            <ProtectedRoute user={user}>
              <Group />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <UnprotectedRoute user={user}>
              <Login />
            </UnprotectedRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
