import {AdminHtmlState} from './types'
import {AdminHtmlActionTypes, SET_ACTIVE_NAV_ITEM, TOGGLE_MOBILE_OPEN} from "./actions";

const initialState: AdminHtmlState = {
  mobileOpen: false,
  activePage: "home"
};

export const adminHtmlReducer = (
  state = initialState,
  action: AdminHtmlActionTypes
): AdminHtmlState => {
  switch (action.type) {
    case TOGGLE_MOBILE_OPEN:
      return state;
    case SET_ACTIVE_NAV_ITEM:
      return {
        ...state,
        activePage: action.activePage
      };
    default:
      return state;
  }
};
