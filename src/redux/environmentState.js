const environment = (state = {
    theme: localStorage.getItem("theme")
  
  }, action) => {
    switch (action.type) {
      case 'CHANGE_THEME':
        localStorage.setItem("theme", action.theme)
        return {
          ...state,
          theme: action.theme
        }
  
  
      default:
        return state
    }
  
  }
  
  export default environment;