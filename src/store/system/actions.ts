import {SystemState} from "./types";

export const UPDATE_SESSION = 'UPDATE_SESSION';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

interface UpdateLoginAction {
  type: typeof UPDATE_LOGIN
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction
  | UpdateLoginAction

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}

export function updateLogin(newLogin: SystemState): SystemActionTypes {
  return {
    type: UPDATE_LOGIN,
    payload: newLogin
  }
}
