import { LOGIN, REGISTER, CLEAR_REDUCER } from "../types";

const initialstate = {
  userDetails: {},
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload)
      return { ...state, userDetails: action.payload };

    case REGISTER:
      return {...state, userDetails: action.payload};

    case CLEAR_REDUCER: 
      return initialstate;
      
    default: 
      return state
  }
}
