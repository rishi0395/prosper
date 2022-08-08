import {
  SET_ACTIVE_STEP_STATE,
  SET_FULL_NAME,
  SET_DISPLAY_NAME,
  SET_WORKSPACE_NAME,
  SET_WORKSPACE_URL,
  SET_WORKSPACE_TYPE,
} from "./types";

export const setActiveStepState = (payload) => ({
  type: SET_ACTIVE_STEP_STATE,
  payload,
});

export const setFullName = (payload) => ({
  type: SET_FULL_NAME,
  payload,
});

export const setDisplayName = (payload) => ({
  type: SET_DISPLAY_NAME,
  payload,
});

export const setWorkSpaceName = (payload) => ({
  type: SET_WORKSPACE_NAME,
  payload,
});

export const setWorkSpaceUrl = (payload) => ({
  type: SET_WORKSPACE_URL,
  payload,
});

export const setWorkSpaceType = (payload) => ({
  type: SET_WORKSPACE_TYPE,
  payload,
});
