import { createMuiTheme } from '@material-ui/core/styles';

import {
    primaryColor,
    secondaryColor,
} from "assets/jss";
import { fade } from '../../../node_modules/@material-ui/core/styles/colorManipulator';


const createTheme = (theme) => {
    const isDarkTheme = theme === "dark"
    const fontColor = !isDarkTheme ? "#000000" : "#ffffff";
    const fontColorWithAlpha87 = fade(fontColor, 0.87);
    const fontColorWithAlpha54 = fade(fontColor, 0.54);
    const fontColorWithAlpha38 = fade(fontColor, 0.38);

    const backgroundColor = !isDarkTheme ? "#ffffff" : "#263238";
    const defaultBackgroundColor = !isDarkTheme ? "#fafafa" : "#34495e";

    return createMuiTheme({
        typography: {
            fontFamily: "'Varela', sans-serif"
        },
        palette: {
            type: isDarkTheme ? "dark" : "light",
            primary: { main: primaryColor }, 
            secondary: { main: secondaryColor }, 
            background: {
                paper: backgroundColor,
                default: defaultBackgroundColor
            },
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
            MuiAppBar: {
            },
            Sidebar: {
                itemText: {
                    color: fontColor
                }
            },
            MuiListItemIcon: {
                root: {
                    color: fontColorWithAlpha54
                }
            },
            MuiListItem: {
                button: {
                    "&:hover": {
                        backgroundColor: fade(secondaryColor,0.1)
                    }
                }
            },
            MuiListItemText: {
                root: {
                    color: fontColorWithAlpha54,

                }
            },
            MuiSelect: {
                root: {
                    "& fieldset": {
                        borderColor: fontColor
                    }
                },
                icon: {
                    color: fontColor
                }
            },
            MuiButton: {

                contained: {
                    backgroundColor: defaultBackgroundColor,
                    color: fontColor,
                    "&:hover": {
                        backgroundColor: backgroundColor,
                    }
                }
            },
            MuiIconButton: {
                root: {
                    color: fontColorWithAlpha54,
                    width: 48,
                    height: 48,
                    padding: 0
                }
            },
            MuiTab: {
                textColorPrimary: {
                    color: fontColorWithAlpha54
                }
            },
            MuiMenuItem: {
                root: {
                    color: fontColorWithAlpha87
                }
            },
            MuiInput: {
                root: {
                    color: fontColorWithAlpha87,
                }
            },
            MuiPaper: {
                elevation1: {
                    boxShadow: "none",
                    border: `1px solid ${fade(fontColor, 0.2)}`
                },
                elevation2: {
                    boxShadow: "none",
                    border: `1px solid ${fade(fontColor, 0.2)}`
                }
            },
            MuiFormLabel: {
                root: {
                    '&$focused': {
                        color: "#70f182"
                    }
                }
            },
            MuiTypography: {
                root: {
                    color: fontColor
                },
                title: {
                    color: fontColor
                },
                subheading: {
                    color: fontColorWithAlpha87
                },
                body1: {
                    color: fontColorWithAlpha87
                }
            }, MuiDialogContentText: {
                root: {
                    color: "#fff !important"
                }
            }, MuiModal: {
                root: {
                    color: fontColor
                }
            }, MuiTableHeader: {
                root: {
                    color: fontColor
                }
            }, MuiTableCell: {
                root: {
                    borderBottom: "1px solid rgba(205, 205, 205, 1)"
                },
                head: {
                    color: fontColorWithAlpha87
                }, body: {
                    color: fontColorWithAlpha87
                }
            }, MuiGridListTileBar: {
                title: {
                    color: fontColor
                }
            }, MuiChip: {
                deleteIcon: {
                    color: "rgba(0, 0, 0, 0.26)"
                }
            }, MuiTooltip: {
                tooltip: {
                    color: fontColor,
                    backgroundColor: "#000"
                }
            },
            MuiTablePagination: {
                select: {
                    paddingRight: 32
                }
            }
        }
    });
}

export default createTheme;