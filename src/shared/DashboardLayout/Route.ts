import { RouteI } from "@/types";

const Routes: Array<RouteI> = [
  {
    path: "/dashboard",
    exact: true,
    name: "Home",
    icon: "house-door-fill",
    comingSoon: false,
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    icon: "person-fill",
    comingSoon: false,
  },
  {
    path: "/connections",
    exact: true,
    name: "Connection",
    icon: "people-fill",
    comingSoon: true,
  },
  {
    path: "/events",
    exact: true,
    name: "Events",
    icon: "calendar2-check",
    comingSoon: true,
  },
  {
    path: "/calendar",
    exact: true,
    name: "Calendar",
    icon: "calendar-minus",
    comingSoon: true,
  },
  {
    path: "/groups",
    exact: true,
    name: "Groups",
    icon: "people",
    comingSoon: true,
  },
  {
    path: "/marketplace",
    exact: true,
    name: "Marketplace",
    icon: "basket-fill",
    comingSoon: true,
  },
  {
    path: "/courses",
    exact: true,
    name: "Courses",
    icon: "mortarboard-fill",
    comingSoon: true,
  },
  {
    path: "/messages",
    exact: true,
    name: "Messages",
    icon: "chat-left-text-fill",
    comingSoon: true,
  },
  {
    path: "/settings",
    exact: true,
    name: "Settings",
    icon: "gear-fill",
    comingSoon: true,
  },
  {
    path: "/logout",
    exact: true,
    name: "Logout",
    icon: "box-arrow-in-right",
    comingSoon: true,
  },
];

export default Routes;
