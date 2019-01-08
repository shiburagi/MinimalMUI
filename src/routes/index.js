const indexRoutes = [

    {
        path: "/",
        component: require("layouts/Dashboard/Dashboard").default,
        index: true
    },

    // { redirect: true, path: "*", to: "/error" },

];

export default indexRoutes;