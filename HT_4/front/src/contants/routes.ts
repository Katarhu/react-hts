
const ROUTES = {
    LOGIN: "/login",
    REGISTRATION: "/registration",
    COURSES: "/courses",
    ADD_COURSE: "/courses/add",
    COURSE: "/courses/:id"
};

export type IRoutes = keyof typeof ROUTES;

export default ROUTES;
