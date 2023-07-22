import { modesTypes } from "../Types";

const initialState = {
  Mode: modesTypes.ADD,
};

const ModesReducer = (state = initialState, action) => {
  switch (action.type) {
    case modesTypes.CHANGE_MODE:
      return {...state,Mode:action.payload}
    default:
      return state
  }
};

export default ModesReducer;
