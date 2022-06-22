export interface RouteProps {
  id: string;
  path: string;
}

export const navbar: RouteProps[] = [
  {
    id: "home",
    path: "/",
  },
  {
    id: "projects",
    path: "/projects",
  },
  {
    id: "contact",
    path: "/contact",
  },
];
