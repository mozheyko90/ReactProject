import { createAction } from "redux-actions";

export const CREATE_TODO = createAction("CREATE_TODO");
export const REMOVE_TODO = createAction("REMOVE_TODO");
export const EDIT_TODO = createAction("EDIT_TODO");
export const COMPLETE_TODO = createAction("COMPLETE_TODO");
export const TOGGLE_TODO = createAction("TOGGLE_TODO");
