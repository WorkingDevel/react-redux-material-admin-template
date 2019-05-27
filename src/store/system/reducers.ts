import {SystemState,} from './types'
import {SystemActionTypes, UPDATE_LOGIN, UPDATE_SESSION} from "./actions";

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: ''
};

export const systemReducer = (
  state = initialState,
  action: SystemActionTypes
): SystemState => {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    case UPDATE_LOGIN: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
};
