import { createMuiTheme } from '@material-ui/core/styles';

import {
    primaryColor as primary,
    secondaryColor as secondary,
} from "assets/jss";
import { fade } from '../../../node_modules/@material-ui/core/styles/colorManipulator';


const createTheme = (theme, _primaryColor, _secondaryColor) => {
    let primaryColor = _primaryColor && _primaryColor !== "undefined" ? _primaryColor : primary
    let secondaryColor = _secondaryColor && _secondaryColor !== "undefined" ? _secondaryColor : secondary
    const isDarkTheme = theme === "dark"
    const fontColor = !isDarkTheme ? "#000000" : "#ffffff";
 

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
        },
        overrides: {
            MuiAppBar: {
            },
            Sidebar: {
                itemText: {
                    
                }
            },
            MuiListItemIcon: {
                root: {
                    
                }
            },
            MuiListItem: {
                button: {
                    "&:hover": {
                        backgroundColor: fade(secondaryColor, 0.1)
                    }
                }
            },
            MuiListItemText: {
                root: {
                    

                }
            },
            MuiSelect: {
                root: {
                    "& fieldset": {
                    }
                },
                icon: {
                    
                }
            },
            MuiButton: {

                contained: {
                    backgroundColor: defaultBackgroundColor,
                    
                    "&:hover": {
                        backgroundColor: backgroundColor,
                    }
                }
            },
            MuiIconButton: {
                root: {
                    
                    width: 48,
                    height: 48,
                    padding: 0
                }
            },
            MuiTab: {
                textColorPrimary: {
                    
                }
            },
            MuiMenuItem: {
                root: {
                    
                }
            },
            MuiInput: {
                root: {
                    
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
                    
                },
                title: {
                    
                },
                subheading: {
                    
                },
                body1: {
                    
                }
            }, MuiDialogContentText: {
                root: {
                    color: "#fff !important"
                }
            }, MuiModal: {
                root: {
                    
                }
            }, MuiTableHeader: {
                root: {
                    
                }
            }, MuiTableCell: {
                root: {
                    borderBottom: "1px solid rgba(205, 205, 205, 1)"
                },
                head: {
                    
                }, body: {
                    
                }
            }, MuiGridListTileBar: {
                title: {
                    
                }
            }, MuiChip: {
                deleteIcon: {
                    color: "rgba(0, 0, 0, 0.26)"
                }
            }, MuiTooltip: {
                tooltip: {
                    
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