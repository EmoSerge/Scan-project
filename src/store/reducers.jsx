const initialState = {
  menuStatus: false,
};

function myReducer(state = initialState, action) {
  if (action.type === "CHANGE_MENU_STATUS") {
    return {...state, menuStatus: !state.menuStatus};
  }
  return state;
}

export default myReducer;
