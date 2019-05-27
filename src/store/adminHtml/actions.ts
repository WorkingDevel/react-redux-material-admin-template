import {AdminHtmlState} from "./types";

export const TOGGLE_MOBILE_OPEN = "TOGGLE_MOBILE_OPEN";
export const SET_ACTIVE_NAV_ITEM = "SET_ACTIVE_NAV_ITEM";

interface ToggleMobileOpenAction {
  type: typeof TOGGLE_MOBILE_OPEN
  payload: AdminHtmlState
}

interface SetActiveNavItemAction {
  type: typeof SET_ACTIVE_NAV_ITEM
  activePage: string
}

export type AdminHtmlActionTypes = ToggleMobileOpenAction | SetActiveNavItemAction

export function toggleMobileOpen(newState: AdminHtmlState): AdminHtmlActionTypes {
  return {
    type: TOGGLE_MOBILE_OPEN,
    payload: newState
  }
}

export function setActiveNavItem(activePage: string): AdminHtmlActionTypes {
  return {
    type: SET_ACTIVE_NAV_ITEM,
    activePage: activePage
  }
}
