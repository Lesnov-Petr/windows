import { lazy } from "react";

const Main = lazy(() => import("./pages/Main"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Office = lazy(() => import("./pages/Office"));
const CardClient = lazy(() => import("./pages/CardClient"));

interface Route {
  id: string;
  exact?: boolean;
  label: string;
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  isProtected: boolean;
  redirectTo: string;
}

export const routes: Route[] = [
  {
    id: "main",
    exact: true,
    label: "Main",
    path: "/",
    component: Main,
    isProtected: false,
    redirectTo: "/",
  },

  {
    id: "signUp",
    label: "signUp",
    path: "/signUp",
    component: SignUp,
    isProtected: false,
    redirectTo: "/",
  },

  {
    id: "office",
    label: "office",
    path: "/office",
    component: Office,
    isProtected: true,
    redirectTo: "/",
  },

  {
    id: "office/cardClient",
    label: "office/cardClient",
    path: "/office/:id",
    component: CardClient,
    isProtected: true,
    redirectTo: "/",
  },
];
