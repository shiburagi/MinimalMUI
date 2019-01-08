import DashboardIcon from "@material-ui/icons/DashboardOutlined"
import UserIcon from "@material-ui/icons/PersonOutline"
import ComponentIcon from "@material-ui/icons/PaletteOutlined"
const indexRoutes = [

        {
                path: "/dashboard", label: "Dashboard",
                icon: DashboardIcon,
                component: require("views/Dashboard/Dashboard.jsx").default
        },
        {
                path: "/user", label: "User",
                icon: UserIcon,
                component: require("views/Dashboard/Dashboard.jsx").default
        },
        {
                path: "/components", label: "Components",
                icon: ComponentIcon,
                component: require("views/Dashboard/Dashboard.jsx").default
        },
        {
                path: "/",
                component: require("views/Dashboard/Dashboard.jsx").default
        },

];

export default indexRoutes;