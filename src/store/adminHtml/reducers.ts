import {AdminHtmlState} from './types'
import {AdminHtmlActionTypes, TOGGLE_MOBILE_OPEN} from "./actions";

const initialState: AdminHtmlState = {
  mobileOpen: false,
  activePage: "dev.auth"
};

export const adminHtmlReducer = (
  state = initialState,
  action: AdminHtmlActionTypes
): AdminHtmlState => {
  switch (action.type) {
    case TOGGLE_MOBILE_OPEN:
      return state;
    default:
      return state;
  }
};
