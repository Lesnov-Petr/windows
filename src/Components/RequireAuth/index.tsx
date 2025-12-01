import { Navigate, To, useLocation } from "react-router-dom";
import { ReactElement } from "react";

interface RequireAuthProps {
  children: ReactElement;
  redirectTo?: To;
}

export function RequireAuth({
  children,
  redirectTo = "/login",
}: RequireAuthProps): ReactElement {
  const location = useLocation();

  // Реализация проверки авторизации
  const isAuthenticated = checkAuth();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return children;
}

// Явная реализация функции проверки
function checkAuth(): boolean {
  // Ваша реальная логика проверки авторизации
  return !!localStorage.getItem("authToken");
  // Или используйте ваш хранилище/контекст:
  // const { isAuthenticated } = useAuth();
  // return isAuthenticated;
}
