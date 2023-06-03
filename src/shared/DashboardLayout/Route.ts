import { RouteI } from "@/types";

const Routes: Array<RouteI> = [
  {
    path: "/dashboard",
    exact: true,
    name: "Home",
    icon: "house-door-fill",
  },
  {
    path: "/my-profile",
    exact: true,
    name: "Profile",
    icon: "person-fill",
  },
  {
    path: "/connections",
    exact: true,
    name: "Connection",
    icon: "people-fill",
  },
  {
    path: "/events",
    exact: true,
    name: "Events",
    icon: "calendar2-check",
  },
  {
    path: "/calendar",
    exact: true,
    name: "Calendar",
    icon: "calendar-minus",
  },
  {
    path: "/groups",
    exact: true,
    name: "Groups",
    icon: "people",
  },
  {
    path: "/marketplace",
    exact: true,
    name: "Marketplace",
    icon: "basket-fill",
  },
  {
    path: "/courses",
    exact: true,
    name: "Courses",
    icon: "mortarboard-fill",
  },
  {
    path: "/messages",
    exact: true,
    name: "Messages",
    icon: "chat-left-text-fill",
  },
  {
    path: "/settings",
    exact: true,
    name: "Settings",
    icon: "gear-fill",
  },
  {
    path: "/logout",
    exact: true,
    name: "Logout",
    icon: "box-arrow-in-right",
  },
];

export default Routes;
