import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import FavoritesPage from "./pages/FavoritesPages";
import SearchPage from "./pages/SearchPage";
import AuthPage from './pages/AuthPage';
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./utils/ProtectedRoute";

const routes: RouteObject[] = [
  { path: "", element: <Navigate to="/home" replace /> },

  {
    path: "/home",
    element: <ProtectedRoute element={<Layout children={<HomePage />} />} />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Layout children={<ProfilePage />} />} />,
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute element={<Layout children={<SettingsPage />} />} />
    ),
  },
  {
    path: "/favorites",
    element: (
      <ProtectedRoute element={<Layout children={<FavoritesPage />} />} />
    ),
  },
  {
    path: "/search",
    element: <ProtectedRoute element={<Layout children={<SearchPage />} />} />,
  },
  { path: "/auth", element: <AuthPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export function Routings() {
  const routing = useRoutes(routes);
  return routing;
}
