import {
  SET_ACTIVE_STEP_STATE,
  SET_DISPLAY_NAME,
  SET_FULL_NAME,
  SET_WORKSPACE_NAME,
  SET_WORKSPACE_URL,
  SET_WORKSPACE_TYPE,
} from "../actions/types";

const initialState = {
  activeStep: 0,
  fullName: "",
  displayName: "",
  workSpaceName: "",
  workSpaceUrl: "",
  workSpaceType: "",
};

function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_STEP_STATE:
      return {
        ...state,
        activeStep: payload,
      };
    case SET_FULL_NAME:
      return {
        ...state,
        fullName: payload,
      };
    case SET_DISPLAY_NAME:
      return {
        ...state,
        displayName: payload,
      };

    case SET_WORKSPACE_NAME:
      return {
        ...state,
        workSpaceName: payload,
      };
    case SET_WORKSPACE_URL:
      return {
        ...state,
        workSpaceUrl: payload,
      };

    case SET_WORKSPACE_TYPE:
      return {
        ...state,
        workSpaceType: payload,
      };

    default:
      return state;
  }
}

export default appReducer;
