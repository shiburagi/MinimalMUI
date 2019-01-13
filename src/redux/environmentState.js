const environment = (state = {
  theme: localStorage.getItem("theme"),
  toolbarColor: localStorage.getItem("toolbarColor"),
  primaryColor: localStorage.getItem("primaryColor"),
  secondaryColor: localStorage.getItem("secondaryColor")
}, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      localStorage.setItem("theme", action.theme)
      return {
        ...state,
        theme: action.theme
      }
      case 'CHANGE_TOOLBAR_COLOR':
      localStorage.setItem("toolbarColor", action.toolbarColor)
      return {
        ...state,
        toolbarColor: action.toolbarColor
      }

      case 'CHANGE_PRIMARY_COLOR':
      localStorage.setItem("primaryColor", action.primaryColor)
      return {
        ...state,
        primaryColor: action.primaryColor
      }

      case 'CHANGE_SECONDARY_COLOR':
      localStorage.setItem("secondaryColor", action.secondaryColor)
      return {
        ...state,
        secondaryColor: action.secondaryColor
      }


    default:
      return state
  }

}

export default environment;