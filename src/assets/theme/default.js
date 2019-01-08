import { createMuiTheme } from '@material-ui/core/styles';

import {
    primaryColor,
    secondaryColor,
} from "assets/jss";
import { fade } from '../../../node_modules/@material-ui/core/styles/colorManipulator';

const fontColor = "#000000";
const fontColorWithAlpha87 = "rgba(0,0,0, 0.87)";
const fontColorWithAlpha54 = "rgba(0,0,0, 0.54)";
const fontColorWithAlpha38 = "rgba(0,0,0, 0.38)";

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Varela', sans-serif"

    },
    palette: {

        primary: { main: primaryColor },
        secondary: { main: secondaryColor },

        text: {
            primary: fontColorWithAlpha87,
            secondary: fontColorWithAlpha54,
            disabled: fontColorWithAlpha38,
            hint: fontColorWithAlpha38
        },
        typography: {
            button: {
                color: fontColorWithAlpha87
            }
        }
    },
    overrides: {
        MuiIconButton: {
            root: {
                width: 48,
                height: 48,
                padding: 0

            }
        },
        MuiCollapse: {
            entered: {
                height: "inherit"
            }

        },
        MuiListItemText: {
            root: {
                color: fontColor,

            }
        },
        MuiTableCell: {
            head: {
                color: "inherit"
            }
        },
        MuiListItem: {
          button: {
            "&:hover": {
              backgroundColor: fade(secondaryColor,0.1)

            }
          }
        },
        MuiPaper: {
            elevation1: {
                boxShadow: "none",
                border: "1px solid #ddd"
            },
            elevation2: {
                boxShadow: "none",
                border: "1px solid #ddd"
            }
        },
        MuiTablePagination: {
            select: {
                paddingRight: 32
            }
        }
    }
});

export default theme;