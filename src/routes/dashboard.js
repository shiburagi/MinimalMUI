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
                path: "/profile", label: "Profile",
                icon: UserIcon,
                component: require("views/Profile/Profile.jsx").default
        },
        {
                path: "/components", label: "Components",
                icon: ComponentIcon,
                component: require("views/Dashboard/Dashboard.jsx").default
        },
        {
                redirect:true,
                path: "/",
                to:"/dashboard"
        },

];

export default indexRoutes;