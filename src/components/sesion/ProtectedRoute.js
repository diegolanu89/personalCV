import React from "react";
import { Navigate  } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Starting from "../modals/Starting";


export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Starting />;

  if (!user) return <Navigate  to="/login" />;

  return <>{children}</>;
}