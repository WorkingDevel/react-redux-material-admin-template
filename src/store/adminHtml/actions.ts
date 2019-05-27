import {AdminHtmlState} from "./types";

export const TOGGLE_MOBILE_OPEN = "TOGGLE_MOBILE_OPEN";

interface ToggleMobileOpenAction {
  type: typeof TOGGLE_MOBILE_OPEN
  payload: AdminHtmlState
}

export type AdminHtmlActionTypes = ToggleMobileOpenAction

export function toggleMobileOpen(newState: AdminHtmlState): AdminHtmlActionTypes {
  return {
    type: TOGGLE_MOBILE_OPEN,
    payload: newState
  }
}
