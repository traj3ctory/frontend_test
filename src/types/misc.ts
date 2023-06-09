export interface RouteI {
    path: string;
    exact: boolean;
    name: string;
    icon: string;
    comingSoon: boolean;
}

export interface CoursesI {
    initial: string;
    title: string;
    code: string;
}

export interface ConnectionsI {
    name: string;
    image: string;
    status: boolean;
}