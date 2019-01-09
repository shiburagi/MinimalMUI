import DashboardIcon from "@material-ui/icons/DashboardOutlined"
import UserIcon from "@material-ui/icons/PersonOutline"
import ComponentIcon from "@material-ui/icons/PaletteOutlined"
import TypographyIcon from "@material-ui/icons/TextFormatOutlined"
import IconIcon from "@material-ui/icons/BubbleChartOutlined"
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
                component: require("views/Components/Components.jsx").default
        },
        {
                path: "/typography", label: "Typography",
                icon: TypographyIcon,
                component: require("views/Typography/Typography.jsx").default
        },
        {
                path: "/icon", label: "Icon",
                icon: IconIcon,
                component: require("views/Icon/Icon.jsx").default
        },
        {
                redirect:true,
                path: "/",
                to:"/dashboard"
        },

];

export default indexRoutes;